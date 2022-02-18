import { useQuery } from '@apollo/client';

import { GET_REPOSITORIES } from '../graphql/queries';

const useRepositories = () => {
  const { loading, error, data } = useQuery(GET_REPOSITORIES, {
    fetchPolicy: 'cache-and-network'
  });

  if(!loading && !error) {
    return data.repositories.edges.map(edgeObj => {
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
  }

  return [];
};

export default useRepositories;