import { useLoaderData, useFetcher } from "react-router";
import { authenticate } from "../shopify.server";
import prisma from "../db.server";

export const loader = async ({ request }) => {
  await authenticate.admin(request);
  const products = await prisma.product.findMany({ include: { colors: true } });
  return { products };
};

export const action = async ({ request }) => {
  const { admin } = await authenticate.admin(request);
  const products = await prisma.product.findMany({ include: { colors: true } });

  let created = 0;
  let errors = [];

  for (const product of products) {
    const res = await admin.graphql(
      `#graphql
      mutation createProduct($input: ProductCreateInput!) {
        productCreate(product: $input) {
          product {
            id
            variants(first: 1) {
              edges { node { id } }
            }
          }
          userErrors { field message }
        }
      }`,
      {
        variables: {
          input: {
            title: product.nameEn,
            descriptionHtml: "<p>" + product.nameDe + "</p>",
            productType: product.category,
          },
        },
      },
    );

    const data = await res.json();
    const userErrors = data.data?.productCreate?.userErrors ?? [];

    if (userErrors.length > 0) {
      errors.push({ ref: product.ref, errors: userErrors });
      continue;
    }

    const variantId = data.data.productCreate.product.variants.edges[0].node.id;
    const productId = data.data.productCreate.product.id;

    await admin.graphql(
      `#graphql
      mutation updateVariant($productId: ID!, $variants: [ProductVariantsBulkInput!]!) {
        productVariantsBulkUpdate(productId: $productId, variants: $variants) {
          userErrors { field message }
        }
      }`,
      {
        variables: {
          productId,
          variants: [
            {
              id: variantId,
              price: product.priceEur.toString(),
              inventoryItem: { sku: product.ref },
            },
          ],
        },
      },
    );

    created++;
  }

  return { created, errors };
};

export default function SyncProducts() {
  const { products } = useLoaderData();
  const fetcher = useFetcher();
  const result = fetcher.data;
  const isSyncing = fetcher.state !== "idle";

  return (
    <s-page heading="Synchronisation des produits">
      <s-section>
        {result && (
          <s-banner tone={result.errors?.length > 0 ? "warning" : "success"}>
            {result.created} produit(s) créé(s) dans Shopify.
            {result.errors?.length > 0 &&
              " " + result.errors.length + " erreur(s)."}
          </s-banner>
        )}
        <s-paragraph>
          {products.length} produits dans la base Prisma.
        </s-paragraph>
        <fetcher.Form method="post">
          <button type="submit" disabled={isSyncing}>
            {isSyncing ? "Synchronisation..." : "Synchroniser vers Shopify"}
          </button>
        </fetcher.Form>
      </s-section>
    </s-page>
  );
}
