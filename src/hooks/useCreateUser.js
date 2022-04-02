import { useMutation } from "@apollo/client";

import { CREATE_USER } from "../graphql/mutations";

const useCreateUser = () => {
  const [mutate, result] = useMutation(CREATE_USER);

  const createUser = async (user) => {

    const options = {
      fetchPolicy: 'no-cache',
      variables: { user }
    };

    const { data } = await mutate(options);
    return data;
  };

  return [createUser, result];
};

export default useCreateUser;