import { useQuery } from '@apollo/client';

import { GET_REPOSITORIES } from '../graphql/queries';

const useRepositories = (variables) => {
  const { loading, error, data, fetchMore } = useQuery(GET_REPOSITORIES, {
    fetchPolicy: 'cache-and-network',
    variables: {
      ...variables
    }
  });

  if(!loading && !error) {
    const repositories = data.repositories.edges.map(edgeObj => {
      return {
        id: edgeObj.node.id,
        fullName: edgeObj.node.fullName,
        description: edgeObj.node.description,
        language: edgeObj.node.language,
        forksCount: edgeObj.node.forksCount,
        stargazersCount: edgeObj.node.stargazersCount,
        ratingAverage: edgeObj.node.ratingAverage,
        reviewCount: edgeObj.node.reviewCount,
        ownerAvatarUrl: edgeObj.node.ownerAvatarUrl
      };
    });

    const handleFetchMore = () => {
      const canFetchMore = !loading && data?.repositories.pageInfo.hasNextPage;
  
      if (!canFetchMore) {
        return;
      }

      fetchMore({
        variables: {
          after: data.repositories.pageInfo.endCursor,
          ...variables,
        },
      });
    };

    return {
      repositories,
      fetchMore: handleFetchMore
    };
  }

  return {};
};

export default useRepositories;