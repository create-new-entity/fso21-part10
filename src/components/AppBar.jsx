import { StyleSheet, View } from 'react-native';
import Constants from 'expo-constants';

import AppBarTab from './AppBarTab';

import theme from './../theme';

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    height: 120,
    backgroundColor: theme.colors.appBarBackGround,
    display: 'flex',
    flexDirection: 'column-reverse'
  }
});

const AppBar = () => {
  return (
    <View style={styles.container}>
      <AppBarTab tabTitle='Repositories' to='/'/>
      <AppBarTab tabTitle='Sign In' to='/signin'/>
    </View>
  );
};

export default AppBar;