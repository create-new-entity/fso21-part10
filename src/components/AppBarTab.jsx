import { StyleSheet, Text } from 'react-native';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
import { useNavigate } from 'react-router-native';

const styles = StyleSheet.create({
  container: {
    padding: 4,
    margin: 8,
    borderWidth: 2,
    borderStyle: 'solid',
    borderRadius: 8
  },
  title: {
    fontSize: 20,
    color: 'white'
  }
});

const AppBarTab = ({ tabTitle, to }) => {
    {/* <Link style={styles.container} to={to}>
      <Text style={styles.title}>{tabTitle}</Text>
    </Link> */}
  const navigate = useNavigate();
  return (
    <Pressable style={styles.container} onPress={() => navigate(to, { replace: true })}>
      <Text style={styles.title}>{tabTitle}</Text>
    </Pressable>
  );
};

export default AppBarTab;