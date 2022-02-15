import { StyleSheet, Text, Pressable } from 'react-native';
import { useNavigate } from 'react-router-native';

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
  const navigate = useNavigate();
  return (
    <Pressable style={styles.container} onPress={() => navigate(to, { replace: true })}>
      <Text style={styles.title}>{tabTitle}</Text>
    </Pressable>
  );
};

export default AppBarTab;