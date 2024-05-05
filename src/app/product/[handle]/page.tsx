import { ProductView } from 'app/components/product/ProductView';
import { getProductById } from 'app/services/shopify/products';
import { redirect } from 'next/navigation';

interface ProductPageProps {
  searchParams: {
    id: string;
  };
}

export default async function ProductPage({ searchParams }: ProductPageProps) {
  const id = searchParams.id;

  if (!id) {
    redirect('/');
  }

  const products = await getProductById(id);
  const product = products[0];

  return <ProductView product={product} />;
}
