import { StyleSheet, Text } from 'react-native';
import { Link } from 'react-router-native';

const styles = StyleSheet.create({
  container: {
    paddingLeft: 16,
    paddingBottom: 16
  },
  title: {
    fontSize: 20,
    color: 'white'
  }
});

const AppBarTab = ({ tabTitle, to }) => {
  return (
    <Link style={styles.container} to={to}>
      <Text style={styles.title}>{tabTitle}</Text>
    </Link>
  );
};

export default AppBarTab;