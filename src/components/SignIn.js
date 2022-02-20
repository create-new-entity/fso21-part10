import { Pressable, View, StyleSheet } from 'react-native';
import { useNavigate } from 'react-router-native';
import { Formik } from 'formik';
import * as Yup from 'yup';

import FormikTextInput from './FormikTextInput';
import Text from './Text';

import theme from '../theme';

import useSignIn from './../hooks/useSignIn';

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
  const navigate = useNavigate();
  const [signIn] = useSignIn();

  const onSubmit = async ({ username, password }) => {
    try {
      await signIn({ username, password });
      navigate('/');
    }
    catch(err) {
      console.log('Something went wrong...');
    }
  };

  const initialValues = {
    username: '',
    password: ''
  };

  const requiredErrMsg = 'Field Required';

  const validationSchema = Yup.object().shape({
    username: Yup.string().required(requiredErrMsg),
    password: Yup.string().required(requiredErrMsg)
  });

  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
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