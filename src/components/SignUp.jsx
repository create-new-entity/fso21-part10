import { Pressable, View, StyleSheet } from 'react-native';
import { useNavigate } from 'react-router-native';
import { Formik } from 'formik';
import * as Yup from 'yup';

import FormikTextInput from './FormikTextInput';
import Text from './Text';

import useCreateUser from './../hooks/useCreateUser.js';
import useSignIn from './../hooks/useSignIn.js';

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

  signUp: {
    backgroundColor: theme.colors.primary,
    color: 'white',
    padding: 16,
    margin: 8,
    borderRadius: 4,
    textAlign: 'center'
  }
});

const SignUp = () => {

  const [createUser] = useCreateUser();
  const [signIn] = useSignIn();
  const navigate = useNavigate();
  
  const initialValues = {
    username: '',
    password: '',
    confirmPassword: ''
  };

  const validationSchema = Yup.object().shape({
    username: Yup.string().required('Username is required'),
    password: Yup.string().required('Password is required'),
    confirmPassword: Yup.string().oneOf([Yup.ref('password'), null], 'Passwords do not match!').required('Password confirmation is required')
  });

  const onSubmit = async ({ username, password }) => {
    try {
      const newUser = { username, password };
      await createUser(newUser);
      await signIn({ username, password });
      navigate('/');
    }
    catch(e) {
      console.log(e);
    }
  };

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

              <FormikTextInput
                name='confirmPassword'
                placeholder='Password confirmation'
                secureTextEntry={true}
                style={styles.formInputField}
              />

              <Pressable onPress={handleSubmit}>
                <Text style={styles.signUp}>Sign Up</Text>
              </Pressable>
            </View>
          );
        }
      }
    </Formik>
  );
};

export default SignUp;