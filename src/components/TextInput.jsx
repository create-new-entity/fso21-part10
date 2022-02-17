import { TextInput as NativeTextInput, StyleSheet } from 'react-native';

import theme from '../theme';

const styles = StyleSheet.create({
  inputFieldError: {
    borderColor: theme.colors.error
  }
});

const TextInput = ({ style, error, ...props }) => {
  const textInputStyle = error ? [style, styles.inputFieldError] : [style];
  return <NativeTextInput style={textInputStyle} {...props} />;
};

export default TextInput;