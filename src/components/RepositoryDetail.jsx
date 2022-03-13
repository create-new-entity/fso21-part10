import React  from 'react';
import { useParams } from 'react-router-native';
import { FlatList, View, Text, StyleSheet } from 'react-native';

import useRepository from '../hooks/useRepository';
import RepositoryItem from './RepositoryItem';

const styles = StyleSheet.create({
  reviewContainer: {
    display: 'flex',
    flexDirection: 'row'
  },

  rating: {
    
  },

  reviewDetails: {
    display: 'flex',
    flexDirection: 'column'
  },

  textDetails: {

  }
});

const ReviewItem = ({ review }) => {
  return (
    <View style={styles.reviewContainer}>
      <Text style={styles.rating}>{review.rating}</Text>
      <View style={styles.reviewDetails}>
        <Text>
          { review.user.username }
        </Text>
        <Text style={styles.textDetails}>{review.text}</Text>
      </View>
    </View>
  );
};

const RepositoryDetail = ({ repositories }) => {
  const { id } = useParams();
  const result = useRepository({ id });

  console.log('result', result);

  if(!repositories) return null;

  const repoDetails = repositories.find(repository => repository.id === id);

  return (
    
    <FlatList
      data={result.reviews}
      renderItem={({ item }) => <ReviewItem review={item} />}
      keyExtractor={({ id }) => id}
      ListHeaderComponent={() => <RepositoryItem item={repoDetails} showURLBtn={true} url={result.url}/>}
    />
  );
};

export default RepositoryDetail;