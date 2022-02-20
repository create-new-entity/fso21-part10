import { useMutation } from "@apollo/client";

import { SIGN_IN } from "../graphql/mutations";

const useSignIn = () => {
  
  const [mutate, result] = useMutation(SIGN_IN);
  
  const signIn = async (credentials) => {

    const options = {
      variables: {
        credentials: { ...credentials }
      }
    };

    return mutate(options);
  };

  return [signIn, result];
};

export default useSignIn;