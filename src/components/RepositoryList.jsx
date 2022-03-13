import { FlatList, View, StyleSheet } from 'react-native';
import RepositoryItem from './RepositoryItem';

const styles = StyleSheet.create({
  separator: {
    height: 10,
    backgroundColor: '#e1e4e8'
  },
});


export const ItemSeparator = () => <View style={styles.separator} />;

export const RepositoryListContainer = ({ repositories }) => {

  const renderItem = ({ item }) => {
    const subDetails = [
      { key: 'stargazersCount', title: 'Stars' },
      { key: 'forksCount', title: 'Forks' },
      { key: 'reviewCount', title: 'Reviews' },
      { key: 'ratingAverage', title: 'Rating' }];
    
    const getFormattedNumber = (num) => {
      if(num < 1000) return num;
      return `${Math.trunc(Math.round((num / 1000) * 10)) / 10}k`;
    };

    item.subDetails = subDetails.map((subDtls) => ({ numberDtl: getFormattedNumber(item[subDtls.key]), title: subDtls.title}))
    return <RepositoryItem item={item}/>;
  };

  return (
    <FlatList
      data={repositories}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={renderItem}
      keyExtractor={item => item.id}
    />
  );
};

const RepositoryList = ({repositories}) => {
  
  if(!repositories) return null;

  return <RepositoryListContainer repositories={repositories} />;
};

export default RepositoryList;