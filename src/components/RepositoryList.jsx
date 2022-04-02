import { FlatList, View, StyleSheet } from 'react-native';
import RepositoryItem from './RepositoryItem';
import { Searchbar } from 'react-native-paper';
import { useState } from 'react';
import { Picker } from '@react-native-picker/picker';
import { useDebounce } from 'use-debounce';

import useRepositories from '../hooks/useRepositories';

const styles = StyleSheet.create({
  separator: {
    height: 10,
    backgroundColor: '#e1e4e8'
  },
});


export const ItemSeparator = () => <View style={styles.separator} />;

export const RepositoryListContainer = ({ repositories, listHeaderComponent }) => {

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
      ListHeaderComponent={listHeaderComponent}
    />
  );
};

const RepositoryList = () => {
  const [selectedPicker, setSelectedPicker] = useState('latest_repo');
  const [order, setOrder] = useState({
    orderBy: 'CREATED_AT',
    orderDirection: 'DESC'
  });
  const [filterTxt, setFilterTxt] = useState('');
  const [debouncedTxt] = useDebounce(filterTxt, 500);
  const { repositories } = useRepositories({ ...order, searchKeyword: debouncedTxt });

  const pickerOptions = [
    {
      label: 'Latest repositories',
      value: 'latest_repo'
    }, {
      label: 'Highest rated repositories',
      value: 'highest_rated'
    }, {
      label: 'Lowest rated repositories',
      value: 'lowest_rated'
    },
  ];

  const handlePickerChange = (itemValue) => {
    setSelectedPicker(itemValue);
    switch(itemValue) {
      case 'latest_repo':
        setOrder({
          orderBy: 'CREATED_AT',
          orderDirection: 'DESC'
        });
        break;
      case 'highest_rated':
        setOrder({
          orderBy: 'RATING_AVERAGE',
          orderDirection: 'DESC'
        });
        break;
      case 'lowest_rated':
        setOrder({
          orderBy: 'RATING_AVERAGE',
          orderDirection: 'ASC'
        });
        break;
      default:
        console.log('Picker not working');
    }
  };

  const handleFilterChange = (query) => {
    setFilterTxt(query);
  };

  const getListHeaderComponent = () => {
    return (
      <>
        <Searchbar placeholder="Search" onChangeText={handleFilterChange} value={filterTxt}/>
        <Picker selectedValue={selectedPicker} onValueChange={handlePickerChange}>
          {
            pickerOptions.map((option, index) => <Picker.Item key={index} label={option.label} value={option.value}/>)
          }
        </Picker>
      </>
    );
  };

  return (
    <>

      <RepositoryListContainer repositories={repositories} listHeaderComponent={getListHeaderComponent()}/>
    </>
  );
};

export default RepositoryList;