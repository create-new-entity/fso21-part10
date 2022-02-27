import React  from 'react';
import { useParams } from 'react-router-native';

import useRepository from '../hooks/useRepository';
import RepositoryItem from './RepositoryItem';

const RepositoryDetail = ({ repositories }) => {
  const { id } = useParams();
  const result = useRepository({ id });

  if(!repositories) return null;

  const item = repositories.find(repository => repository.id === id);

  return (
    <RepositoryItem item={item} showURLBtn={true} url={result.url}/>
  );
};

export default RepositoryDetail;