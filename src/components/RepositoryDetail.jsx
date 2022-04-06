import React  from 'react';
import { format } from 'date-fns';
import { useParams, useLocation } from 'react-router-native';
import { FlatList, View, StyleSheet } from 'react-native';

import { ItemSeparator } from './RepositoryList';
import Text from './Text';

import useRepository from '../hooks/useRepository';
import RepositoryItem from './RepositoryItem';

import { reviewStyles } from '../theme'; './../theme';

const styles = StyleSheet.create({
  reviewContainer: reviewStyles.reviewContainer,
  rating: reviewStyles.rating,
  reviewDetailsContainer: reviewStyles.reviewDetailsContainer,
  detailsText: reviewStyles.detailsText
});

export const ReviewItem = ({ review }) => {
  const location = useLocation();

  return (
    <View style={styles.reviewContainer}>
      <View style={styles.rating}>
        <Text color='primary' fontWeight='bold'>{review.rating}</Text>
      </View>
      <View style={styles.reviewDetailsContainer}>
        <Text fontWeight='bold'>
          { location?.pathname === '/myreviews' ? review.repository.fullName : review.user.username }
        </Text>
        <Text color='textSecondary'>
          { format(new Date(review.createdAt), 'dd.MM.yyyy') }
        </Text>
        <Text numberOfLines={7} style={styles.detailsText}>{review.text}</Text>
      </View>
    </View>
  );
};

const RepositoryDetail = () => {
  const { id } = useParams();
  const { result, fetchMore } = useRepository({ first: 5, id });
  
  return (
    <FlatList
      data={result?.reviews}
      renderItem={({ item }) => <ReviewItem review={item} />}
      keyExtractor={({ id }) => id}
      ItemSeparatorComponent={ItemSeparator}
      ListHeaderComponent={() => result ? <RepositoryItem item={result} showURLBtn={true} url={result.url}/> : null}
      onEndReached={fetchMore}
      onEndReachedThreshold={0.5}
    />
  );
};

export default RepositoryDetail;