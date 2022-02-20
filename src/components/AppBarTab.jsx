import { StyleSheet, Text } from 'react-native';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';

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

const AppBarTab = ({ tabTitle, onPress }) => {
  return (
    <Pressable style={styles.container} onPress={onPress}>
      <Text style={styles.title}>{tabTitle}</Text>
    </Pressable>
  );
};

export default AppBarTab;