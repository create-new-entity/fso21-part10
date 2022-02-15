import { StyleSheet, View } from 'react-native';

import theme from './../theme';
import Text from './Text';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly'
  },

  numberDtl: {
    fontWeight: theme.fontWeights.bold
  }
});


const SubDetail = ({ numberDtl, title }) => {
  return (
    <View style={styles.container}>
      <Text
        color='primary'
        fontSize='body'
      >{numberDtl}</Text>
      <Text
        color='secondary'
        fontSize='subheading'
      >{title}</Text>
    </View>
  );
};


export default SubDetail;