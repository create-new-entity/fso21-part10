import { useQuery } from '@apollo/client';

import { ME } from './../graphql/queries';

const useMe = (variables) => {
  const options = {
    variables
  };
  const { loading, error, data, fetchMore } = useQuery(ME, options);

  if(!loading && !error){

    const handleFetchMore = () => {
      const canFetchMore = data?.me.reviews.pageInfo.hasNextPage;
      if(!canFetchMore) return;

      const after = data.me.reviews.pageInfo.endCursor;
      fetchMore({
        variables: {
          after,
          ...variables
        }
      });
    };

    return {
      data,
      fetchMore: handleFetchMore
    }
  }
  
  return {};
};

export default useMe;