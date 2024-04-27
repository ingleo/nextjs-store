interface SearchParams {
  [key: string]: string;
}

interface CategoryProps {
  params: {
    categories: string[];
  };
  searchParams: SearchParams;
}

export default function Category(props: CategoryProps) {
  const { categories } = props.params;

  return (
    <div>
      {categories && (
        <ul>
          {categories.map((category) => (
            <li key={category}>{category}</li>
          ))}
        </ul>
      )}

      {props.searchParams && (
        <ul>
          {Object.entries(props.searchParams).map(([key, value]) => (
            <li key={key}>
              {key}: {value}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
