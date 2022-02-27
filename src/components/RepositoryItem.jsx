import React  from 'react';
import { useNavigate } from 'react-router-native';
import { View, Image, StyleSheet, FlatList, Pressable, Linking } from 'react-native';

import Text from './Text';
import SubDetail from './SubDetail';

import theme from './../theme';

const max = 1000;
const takenIds = [];


const getDummyId = () => {
  let newId;
  while(true) {
    newId = Math.floor(Math.random() * max);
    if(!takenIds.includes(newId)) break;
  }
  takenIds.push(newId);
  return newId;
}

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
    paddingLeft: 16,
    paddingRight: 40
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

  tinyLogo: {
    ...theme.images.ownerAvatar
  },

  externalURLContainer: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: theme.colors.primary,
    marginTop: 4,
    padding: 12.5,
    borderRadius: 4
  },

  externalURLText: {
    color: 'white'
  }
});

const RepositoryItem = ({ item, showURLBtn, url }) => {
  const navigate = useNavigate();

  const renderSubDetail = ({ item }) => <SubDetail key={item.title} numberDtl={item.numberDtl} title={item.title}/>
  
  const externalURLContent = (
    <Pressable onPress={() => Linking.openURL(url)}>
      <View style={styles.externalURLContainer}>
        <Text style={styles.externalURLText}>Open in GitHub</Text>
      </View>
    </Pressable>
  );

  const getContent = () => {
    return (
      <View testID='repositoryItem' style={styles.container}>
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
              color='textSecondary'
              fontSize='subheading'
              numberOfLines={5}
              style={styles.subHeading}
            >{item.description}</Text>
            <Text style={styles.languageTag}>{item.language}</Text>
          </View>
        </View>
        
        <FlatList
          data={item.subDetails}
          renderItem={renderSubDetail}
          keyExtractor={getDummyId}
          numColumns={4}
          columnWrapperStyle={{ flex: 1, justifyContent: "space-evenly", paddingTop: 8 }}
        />
        
        {
          showURLBtn ? externalURLContent : null
        }
        
      </View>
    )
  };

  const wrapWithPressable = () => {
    const handleShowItemDetail = async () => {
      navigate(`/detail/${item.id}`, { replace: true });
    };
    
    return (
      <Pressable onPress={handleShowItemDetail}>
        { getContent() }
      </Pressable>
    );
  };
  

  return (
    <>
      {
        showURLBtn ? getContent() : wrapWithPressable()
      }
    </>
  );
};

export default RepositoryItem;