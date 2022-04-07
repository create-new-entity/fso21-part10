import React  from 'react';
import { format } from 'date-fns';
import { useParams, useLocation } from 'react-router-native';
import { FlatList, View, StyleSheet, Pressable } from 'react-native';

import { ItemSeparator } from './RepositoryList';
import Text from './Text';

import useRepository from '../hooks/useRepository';
import RepositoryItem from './RepositoryItem';

import theme, { reviewStyles } from '../theme';

const styles = StyleSheet.create({
  reviewContainer: reviewStyles.reviewContainer,
  rating: reviewStyles.rating,
  reviewDetailsContainer: reviewStyles.reviewDetailsContainer,
  detailsText: reviewStyles.detailsText,

  outerContainer: {
    display: 'flex',
    flexDirection: 'column',
    paddingBottom: 8
  },

  reviewActionsContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly'
  },

  reviewActionTextContainer: {
    marginTop: 4,
    padding: 16,
    paddingLeft: 25,
    paddingRight: 25,
    borderRadius: 4
  },

  reviewActionText: {
    color: 'white'
  }
});

export const ReviewItem = ({ review, myreview }) => {
  const location = useLocation();

  const reviewActionComponents = (
    <View style={styles.reviewActionsContainer}>
      <Pressable onPress={() => console.log('View pressed')}>
        <View style={{ ...styles.reviewActionTextContainer, backgroundColor: theme.colors.primary }}>
          <Text style={styles.reviewActionText}>View repository</Text>
        </View>
      </Pressable>
      <Pressable onPress={() => console.log('Delete pressed')}>
        <View style={{ ...styles.reviewActionTextContainer, backgroundColor: theme.colors.error }}>
          <Text style={styles.reviewActionText}>Delete review</Text>
        </View>
      </Pressable>
    </View>
  );

  return (
    <View style={styles.outerContainer}>
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
      {
        myreview ? reviewActionComponents : null
      }
    </View>
  );
};

const RepositoryDetail = () => {
  const { id } = useParams();
  const { result, fetchMore } = useRepository({ first: 5, id });
  
  return (
    <FlatList
      data={result?.reviews}
      renderItem={({ item }) => <ReviewItem review={item} myreview={false}/>}
      keyExtractor={({ id }) => id}
      ItemSeparatorComponent={ItemSeparator}
      ListHeaderComponent={() => result ? <RepositoryItem item={result} showURLBtn={true} url={result.url}/> : null}
      onEndReached={fetchMore}
      onEndReachedThreshold={0.5}
    />
  );
};

export default RepositoryDetail;