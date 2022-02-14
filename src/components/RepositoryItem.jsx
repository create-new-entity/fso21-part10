import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

import theme from './../theme';

const styles = StyleSheet.create({
  container: {
    paddingLeft: 10,
    paddingRight: 10
  },
  tinyLogo: {
    width: theme.images.ownerAvatar.width,
    height: theme.images.ownerAvatar.height,
  }
});

const RepositoryItem = ({ item }) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.tinyLogo}
        source={{
          uri: item.ownerAvatarUrl,
        }}
        resizeMode='cover'
      />
      {/* <Text>{item.fullName}</Text>
      <Text>{item.description}</Text>
      <Text>{item.language}</Text>
      <Text>{item.forksCount}</Text>
      <Text>{item.stargazersCount}</Text>
      <Text>{item.ratingAverage}</Text>
      <Text>{item.reviewCount}</Text> */}
    </View>
  );
};

export default RepositoryItem;