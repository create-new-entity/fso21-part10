import React  from 'react';
import { useParams } from 'react-router-native';

import RepositoryItem from './RepositoryItem';
import useRepositories from '../hooks/useRepositories';

const RepositoryDetail = () => {
  const { repositories } = useRepositories();
  const { id } = useParams();

  if(!repositories) return null;

  const item = repositories.find(repository => repository.id === id);

  return (
    <RepositoryItem item={item} showURLBtn={true}/>
  );
};

export default RepositoryDetail;