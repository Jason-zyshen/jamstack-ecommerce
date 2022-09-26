import { useQuery } from '../gqty';

const Test = () => {
  const query = useQuery({
    suspense: false,
    staleWhileRevalidate: true,
    onError(error) {},
  });

  if (query.$state.isLoading) {
    return <p>Loading...</p>;
  }

  return <p>{query.dragons.}</p>;
}

export default Test