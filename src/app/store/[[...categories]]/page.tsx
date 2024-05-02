import { ProductsWrapper } from 'app/components/store/ProductsWrapper';

import { getProducts } from 'app/services/shopify';

interface SearchParams {
  [key: string]: string;
}

interface CategoryProps {
  params: {
    categories: string[];
  };
  searchParams: SearchParams;
}

export default async function Category(props: CategoryProps) {
  const products = await getProducts();
  const { categories } = props.params;

  return <ProductsWrapper products={products} />;
}
