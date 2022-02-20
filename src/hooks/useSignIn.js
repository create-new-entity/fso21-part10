import { useMutation, useApolloClient } from "@apollo/client";

import { SIGN_IN } from "../graphql/mutations";
import useAuthStorage from '../hooks/useAuthStorage';

const useSignIn = () => {
  
  const [mutate, result] = useMutation(SIGN_IN);
  const authStorage = useAuthStorage();
  const apolloClient = useApolloClient();
  
  const signIn = async (credentials) => {

    const options = {
      variables: {
        credentials: { ...credentials }
      }
    };

    const { data } = await mutate(options);
    await authStorage.setAccessToken(data.authenticate.accessToken);
    await apolloClient.resetStore();
  };

  return [signIn, result];
};

export default useSignIn;