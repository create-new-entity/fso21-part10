import { StyleSheet, View } from 'react-native';
import { Route, Routes, Navigate } from 'react-router-native';

import RepositoryList from './RepositoryList';
import RepositoryDetail from './RepositoryDetail';
import SignInContainer from './SignInContainer';
import CreateReviewPage from './CreateReviewPage';
import AppBar from './AppBar';
import SignUp from './SignUp';
import MyReviews from './MyReviews';


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
        <Route path="/signup" element={<SignUp/>} exact/>
        <Route path="/detail/:id" element={<RepositoryDetail/>} exact/>
        <Route path="/myreviews" element={<MyReviews/>} exact/>
        <Route path="/createReview" element={<CreateReviewPage/>} exact/>
        <Route path="/" element={<RepositoryList/>} exact />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </View>
  );
};

export default Main;