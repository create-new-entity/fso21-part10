import { Pressable, View, StyleSheet } from 'react-native';
import { Formik } from 'formik';

import FormikTextInput from './FormikTextInput';
import Text from './Text';

import theme from '../theme';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end'
  },

  formInputField: {
    borderStyle: 'solid',
    borderWidth: 2,
    borderRadius: 8,
    borderColor: theme.colors.textSecondary,
    color: theme.colors.textSecondary,
    padding: 8,
    margin: 8
  },

  signIn: {
    backgroundColor: theme.colors.primary,
    color: 'white',
    padding: 16,
    margin: 8,
    borderRadius: 4,
    textAlign: 'center'
  }
});

const SignIn = () => {
  const onSubmit = (values) => console.log(values);
  const initialValues = {
    username: '',
    password: ''
  };
  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit}>
      {
        ({ handleSubmit }) => {
          return (
            <View style={styles.container}>
              <FormikTextInput
                name='username'
                placeholder='Username'
                style={styles.formInputField}
              />

              <FormikTextInput
                name='password'
                placeholder='Password'
                secureTextEntry={true}
                style={styles.formInputField}
              />

              <Pressable onPress={handleSubmit}>
                <Text style={styles.signIn}>Sign In</Text>
              </Pressable>
            </View>
          );
        }
      }
    </Formik>
  );
};

export default SignIn;