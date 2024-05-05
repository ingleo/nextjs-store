import { getProducts } from 'app/services/shopify/products';
import { getMainProducts } from 'app/services/shopify/collections';

export async function GET() {
  const products = await getMainProducts();

  return Response.json({ products });
}
