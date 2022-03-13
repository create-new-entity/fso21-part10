import { useQuery } from '@apollo/client';

import { GET_REPOSITORY } from '../graphql/queries';

const useRepository = ({ id }) => {
  const options = {
    variables: { id },
    fetchPolicy: 'cache-and-network'
  };

  const { loading, error, data } = useQuery(GET_REPOSITORY, options);

  const getReview = (edgeNode) => ({
    createdAt: edgeNode.createdAt,
    id: edgeNode.id,
    rating: edgeNode.rating,
    text: edgeNode.text,
    user: {
      id: edgeNode.user.id,
      username: edgeNode.user.username
    }
  });

  if(!loading && !error) return {
    id: data.repository.id,
    fullName: data.repository.fullName,
    url: data.repository.url,
    reviews: data.repository.reviews.edges.map(edge => getReview(edge.node))
  };

  return {};
};

export default useRepository;