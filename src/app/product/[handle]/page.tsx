import { ProductView } from 'app/components/product/ProductView';
import { getProductById } from 'app/services/shopify/products';

interface ProductPageProps {
  searchParams: {
    id: string;
  };
}

export default async function ProductPage({ searchParams }: ProductPageProps) {
  const id = searchParams.id;

  const products = await getProductById(id);
  const product = products[0];

  console.log(product);

  return <ProductView product={product} />;
}
