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
    const hasColors = product.colors.length > 0;

    // ── Étape 1 : créer le produit ──────────────────────────────────────────
    const productInput = {
      title: product.nameEn,
      descriptionHtml: "<p>" + product.nameDe + "</p>",
      productType: product.category,
    };

    const createRes = await admin.graphql(
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
      { variables: { input: productInput } },
    );

    const createData = await createRes.json();
    const createErrors = createData.data?.productCreate?.userErrors ?? [];

    if (createErrors.length > 0) {
      errors.push({ ref: product.ref, errors: createErrors });
      continue;
    }

    const productId = createData.data.productCreate.product.id;
    const defaultVariantId =
      createData.data.productCreate.product.variants.edges[0].node.id;

    // ── Étape 1b : ajouter les options si couleurs ──────────────────────────
    if (hasColors) {
      await admin.graphql(
        `#graphql
    mutation createOptions($productId: ID!, $options: [OptionCreateInput!]!) {
      productOptionsCreate(productId: $productId, options: $options) {
        userErrors { field message }
      }
    }`,
        {
          variables: {
            productId,
            options: [
              {
                name: "Couleur",
                values: product.colors.map((c) => ({ name: c.color })),
              },
            ],
          },
        },
      );
    }

    // ── Étape 2a : produit sans couleurs → mettre à jour la variante par défaut
    if (!hasColors) {
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
                id: defaultVariantId,
                price: product.priceEur.toString(),
                inventoryItem: { sku: product.ref },
              },
            ],
          },
        },
      );
    } else {
      // ── Étape 2b : produit avec couleurs → créer une variante par couleur
      await admin.graphql(
        `#graphql
        mutation createVariants($productId: ID!, $variants: [ProductVariantsBulkInput!]!) {
          productVariantsBulkCreate(productId: $productId, variants: $variants) {
            productVariants { id title }
            userErrors { field message }
          }
        }`,
        {
          variables: {
            productId,
            variants: product.colors.map((c) => ({
              price: product.priceEur.toString(),
              inventoryItem: { sku: product.ref + "-" + c.color },
              optionValues: [{ optionName: "Couleur", name: c.color }],
            })),
          },
        },
      );

      // Supprimer la variante par défaut créée automatiquement ("Default Title")
      await admin.graphql(
        `#graphql
        mutation deleteVariant($productId: ID!, $variantsIds: [ID!]!) {
          productVariantsBulkDelete(productId: $productId, variantsIds: $variantsIds) {
            userErrors { field message }
          }
        }`,
        { variables: { productId, variantsIds: [defaultVariantId] } },
      );
    }

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
            {result.errors?.length > 0 && (
              <ul>
                {result.errors.map((e, i) => (
                  <li key={i}>
                    {e.ref}: {e.errors.map((err) => err.message).join(", ")}
                  </li>
                ))}
              </ul>
            )}
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
