import { useQuery } from '@apollo/client';

import { GET_REPOSITORY } from '../graphql/queries';

const useRepository = (variables) => {
  const options = {
    variables,
    fetchPolicy: 'cache-and-network'
  };

  const { loading, error, data, fetchMore } = useQuery(GET_REPOSITORY, options);

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

  if(!loading && !error) {
    console.log(data);
    const result = {
      id: data.repository.id,
      fullName: data.repository.fullName,
      url: data.repository.url,
      description: data.repository.description,
      language: data.repository.language,
      forksCount: data.repository.forksCount,
      stargazersCount: data.repository.stargazersCount,
      ratingAverage: data.repository.ratingAverage,
      reviewCount: data.repository.reviewCount,
      ownerAvatarUrl: data.repository.ownerAvatarUrl,
      reviews: data.repository.reviews.edges.map(edge => getReview(edge.node))
    };

    const handleFetchMore = () => {
      const canFetchMore = !loading && data?.repository.reviews.pageInfo.hasNextPage;

      // console.log(data.repository.reviews.pageInfo);
      // console.log({
      //   after: data.repository.reviews.pageInfo.endCursor,
      //   ...variables,
      // });
      
      if (!canFetchMore) {
        return;
      }

      fetchMore({
        variables: {
          after: data.repository.reviews.pageInfo.endCursor,
          ...variables,
        },
      });
    };

    return {
      result,
      fetchMore: handleFetchMore
    };
  }

  return {};
};

export default useRepository;