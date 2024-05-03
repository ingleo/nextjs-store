import { ProductsWrapper } from 'app/components/store/ProductsWrapper';

import { getProducts } from 'app/services/shopify/products';
import {
  getCollectionProducts,
  getCollections,
} from 'app/services/shopify/collections';

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
  let products = [];
  const { categories } = props.params;

  if (categories?.length > 0) {
    const collections = await getCollections();
    const selectedCollection = collections.find(
      (collection: any) => collection.handle === categories[0]
    ).id;
    products = await getCollectionProducts(selectedCollection);
  } else {
    products = await getProducts();
  }

  return <ProductsWrapper products={products} />;
}
