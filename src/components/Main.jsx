import { StyleSheet, View } from 'react-native';
import { Route, Routes, Navigate } from 'react-router-native';

import RepositoryList from './RepositoryList';
import RepositoryDetail from './RepositoryDetail';
import SignInContainer from './SignInContainer';
import CreateReviewPage from './CreateReviewPage';
import AppBar from './AppBar';

import useRepositories from '../hooks/useRepositories';


const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    flexShrink: 1,
  },
});

const Main = () => {
  const { repositories } = useRepositories();

  return (
    <View style={styles.container}>
      <AppBar/>
      <Routes>
        <Route path="/signin" element={<SignInContainer />} exact />
        <Route path="/detail/:id" element={<RepositoryDetail repositories={repositories} />} exact/>
        <Route path="/createReview" element={<CreateReviewPage/>} exact/>
        <Route path="/" element={<RepositoryList repositories={repositories}/>} exact />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </View>
  );
};

export default Main;