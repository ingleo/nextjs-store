interface ErrorPageProps {
  error: Error;
  reset: () => void;
}

type ProductType = {
  id: string;
  gql_id: string;
  title: string;
  description: string;
  price: number;
  image: string;
  quantity: number;
  handle: string;
  tags: string;
};

type CartItem = {
  title: string;
  price: number;
  quantity: number;
  id: string;
  image: string;
  merchandiseId: string;
};
