import { StyleSheet, View } from 'react-native';

import RepositoryList from './RepositoryList';
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
      {/* <Text>Rate Repository Application</Text> */}
      <AppBar tabTitle='Repositories'/>
      <RepositoryList/>
    </View>
  );
};

export default Main;