import { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Route, Routes, Navigate } from 'react-router-native';

import RepositoryList from './RepositoryList';
import RepositoryItem from './RepositoryItem';
import SignInContainer from './SignInContainer';
import AppBar from './AppBar';

import useDetailItemStorage from '../hooks/useDetailItemStorage';

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    flexShrink: 1,
  },
});

const Main = () => {
  const [item, setItem] = useState();
  const detailItemStorage = useDetailItemStorage();

  useEffect(() => {
    (async () => {
      const storedItem = await detailItemStorage.getDetailItem();
      setItem(storedItem);
    })();
  }, [detailItemStorage]);

  return (
    <View style={styles.container}>
      <AppBar/>
      <Routes>
        <Route path="/signin" element={<SignInContainer />} exact />
        <Route path="/detail/:id" element={<RepositoryItem item={item} showURLBtn={true}/>} exact/>
        <Route path="/" element={<RepositoryList />} exact />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </View>
  );
};

export default Main;