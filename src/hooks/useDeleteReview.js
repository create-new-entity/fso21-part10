import { useMutation } from '@apollo/client';
import { ME } from '../graphql/queries';
import { DELETE_REVIEW } from '../graphql/mutations';

const useDeleteReview = () => {
  const [mutate] = useMutation(DELETE_REVIEW, {
    refetchQueries: [{
      query: ME,
      variables: {
        first: 5,
        includeReviews: true
      }
    }]
  });

  const deleteReview = async (reviewId) => {
    const options = {
      variables: {
        reviewId
      }
    };
    const { data } = await mutate(options);
    return data.deleteReview;
  };

  return [deleteReview];
};

export default useDeleteReview;