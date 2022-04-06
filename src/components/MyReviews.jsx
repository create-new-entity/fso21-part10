import { FlatList } from 'react-native';
import useMe from '../hooks/useMe';

import { ReviewItem } from './RepositoryDetail';
import { ItemSeparator } from './RepositoryList';


const MyReviews = () => {
  const { data, fetchMore } = useMe({ first: 5, includeReviews: true });

  return (
    <FlatList
      data={data?.me?.reviews.edges}
      renderItem={({ item }) => {
        return <ReviewItem review={item.node} />;
      }}
      keyExtractor={(item) => item.node.id }
      ItemSeparatorComponent={ItemSeparator}
      onEndReached={fetchMore}
      onEndReachedThreshold={0.5}
    />
  );
};

export default MyReviews;