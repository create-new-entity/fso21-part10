import { StyleSheet, View } from 'react-native';
import { Route, Routes, Navigate } from 'react-router-native';

import RepositoryList from './RepositoryList';
import RepositoryItem from './RepositoryItem';
import SignInContainer from './SignInContainer';
import AppBar from './AppBar';


const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    flexShrink: 1,
  },
});

const Main = () => {
  return (
    <View style={styles.container}>
      <AppBar/>
      <Routes>
        <Route path="/signin" element={<SignInContainer />} exact />
        <Route path="/detail/:id" element={<RepositoryItem showURLBtn={true}/>} exact/>
        <Route path="/" element={<RepositoryList />} exact />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </View>
  );
};

export default Main;