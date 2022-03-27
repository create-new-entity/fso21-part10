import { useMutation } from "@apollo/client";

import { CREATE_REVIEW } from "../graphql/mutations";

const useCreateReview = () => {
  const [mutate, result] = useMutation(CREATE_REVIEW);

  const createReview = async (review) => {

    const options = {
      fetchPolicy: 'no-cache',
      variables: { review }
    };

    const { data } = await mutate(options);
    return data;
  };

  return [createReview, result];
};

export default useCreateReview;