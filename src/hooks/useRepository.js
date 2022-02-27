import { useQuery } from '@apollo/client';

import { GET_REPOSITORY } from '../graphql/queries';

const useRepository = ({ id }) => {
  const options = {
    variables: { id },
    fetchPolicy: 'cache-and-network'
  };

  const { loading, error, data } = useQuery(GET_REPOSITORY, options);

  if(!loading && !error) return {
    id: data.repository.id,
    fullName: data.repository.fullName,
    url: data.repository.url
  };

  return {};
};

export default useRepository;