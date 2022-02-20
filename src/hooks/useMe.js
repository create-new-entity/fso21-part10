import { useQuery } from '@apollo/client';

import { ME } from './../graphql/queries';

const useMe = () => {
  const result = useQuery(ME);
  
  return result;
};

export default useMe;