import prisma from "../db.server";

export const loader = async ({ request }) => {
  // Autoriser les requêtes cross-origin depuis la boutique Shopify
  const products = await prisma.product.findMany({
    include: { colors: true },
    orderBy: { id: "asc" },
  });

  return new Response(JSON.stringify(products), {
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*", // ou votre domaine .myshopify.com
    },
  });
};
