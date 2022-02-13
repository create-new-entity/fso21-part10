import React from 'react';
import { View, Text } from 'react-native';

const RepositoryItem = ({ item }) => {
  return (
    <View>
      <Text>{item.fullName}</Text>
      <Text>{item.description}</Text>
      <Text>{item.language}</Text>
      <Text>{item.forksCount}</Text>
      <Text>{item.stargazersCount}</Text>
      <Text>{item.ratingAverage}</Text>
      <Text>{item.reviewCount}</Text>
    </View>
  );
};

export default RepositoryItem;