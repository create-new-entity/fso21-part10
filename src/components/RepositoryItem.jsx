import React from 'react';
import { View, Image, StyleSheet, FlatList } from 'react-native';

import Text from './Text';
import SubDetail from './SubDetail';

import theme from './../theme';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    paddingTop: 8,
    paddingRight: 4,
    paddingBottom: 8,
    paddingLeft: 8
  },

  repoDetailContainer: {
    display: 'flex',
    flexDirection: 'row'
  },

  repoDetails: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'space-evenly',
    paddingRight: 32,
    paddingLeft: 16
  },

  subHeading: {
    paddingBottom: 4
  },

  languageTag: {
    color: 'white',
    backgroundColor: theme.colors.primary,
    padding: 8,
    borderRadius: 4
  },

  subDetailsContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    paddingTop: 8
  },

  tinyLogo: {
    ...theme.images.ownerAvatar
  }
});

const RepositoryItem = ({ item }) => {

  const renderSubDetail = ({ item }) => <SubDetail key={item.title} numberDtl={item.numberDtl} title={item.title}/>

  return (
    <View style={styles.container}>
      <View style={styles.repoDetailContainer}>
        <Image
          style={styles.tinyLogo}
          source={{
            uri: item.ownerAvatarUrl,
          }}
          resizeMode='cover'
        />
        <View style={styles.repoDetails}>
          <Text fontWeight="bold">{item.fullName}</Text>
          <Text
            color='secondary'
            fontSize='subheading'
            numberOfLines={2}
            style={styles.subHeading}
          >{item.description}</Text>
          <Text style={styles.languageTag}>{item.language}</Text>
        </View>
      </View>
      <FlatList
        data={item.subDetails}
        renderItem={renderSubDetail}
        style={styles.subDetailsContainer}
      />
    </View>
  );
};

export default RepositoryItem;