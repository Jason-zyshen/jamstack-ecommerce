import { useQuery } from '../gqty';

const Test = () => {
  const query = useQuery({
    // boolean | undefined
    suspense: false,

    // boolean | object | number | string | null
    // If you put an object to trigger re-validation on-demand, it should be a `memoized` value from `useMemo`
    staleWhileRevalidate: true,

    // ((error: GQtyError) => void) | undefined
    onError(error) {},
  });

  if (query.$state.isLoading) {
    return <p>Loading...</p>;
  }

  return <p>{query.products.price}</p>;
}

export default Test