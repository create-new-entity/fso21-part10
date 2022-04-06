import React  from 'react';
import { format } from 'date-fns';
import { useParams } from 'react-router-native';
import { FlatList, View, StyleSheet, Dimensions } from 'react-native';

import { ItemSeparator } from './RepositoryList';
import Text from './Text';

import useRepository from '../hooks/useRepository';
import RepositoryItem from './RepositoryItem';

import theme from '../theme';

const ratingWidth = 40;
const parentPadding = 8;
const windowWidth = Dimensions.get('window').width;
const reviewDetailsContainerPaddingLeft = 12;

const styles = StyleSheet.create({
  reviewContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    padding: parentPadding,
    paddingTop: 8,
    width: windowWidth
  },

  rating: {
    width: ratingWidth,
    height: 40,
    borderWidth: 2,
    borderRadius: ratingWidth / 2,
    borderColor: theme.colors.primary,

    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },

  reviewDetailsContainer: {
    display: 'flex',
    flexDirection: 'column',
    paddingTop: 2,
    paddingLeft: reviewDetailsContainerPaddingLeft,
  },

  detailsText: {
    width: 0,
    paddingTop: 2,
    minWidth: windowWidth - ratingWidth - parentPadding * 2 - reviewDetailsContainerPaddingLeft
  }
});

const ReviewItem = ({ review }) => {
  return (
    <View style={styles.reviewContainer}>
      <View style={styles.rating}>
        <Text color='primary' fontWeight='bold'>{review.rating}</Text>
      </View>
      <View style={styles.reviewDetailsContainer}>
        <Text fontWeight='bold'>
          { review.user.username }
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
  const { result, fetchMore } = useRepository({ first: 8, id });
  
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