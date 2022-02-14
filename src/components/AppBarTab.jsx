import { StyleSheet, Text, Pressable } from 'react-native';

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

const AppBarTab = ({ tabTitle }) => {
  return (
    <Pressable onPress={() => console.log('Abulo')} style={styles.container}>
      <Text style={styles.title}>{tabTitle}</Text>
    </Pressable>
  );
};

export default AppBarTab;