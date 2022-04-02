import { useQuery } from '@apollo/client';

import { GET_REPOSITORIES } from '../graphql/queries';

const useRepositories = ({ orderBy, orderDirection }) => {
  const { loading, error, data } = useQuery(GET_REPOSITORIES, {
    fetchPolicy: 'cache-and-network',
    variables: {
      orderBy, orderDirection
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

    
    return { repositories };
  }

  return {};
};

export default useRepositories;