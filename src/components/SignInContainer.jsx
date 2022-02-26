import { useNavigate } from 'react-router-native';
import * as Yup from 'yup';

import SignIn from './SignIn';

import useSignIn from '../hooks/useSignIn';

const SignInContainer = () => {
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

  return <SignIn
    initialValues={initialValues}
    onSubmit={onSubmit}
    validationSchema={validationSchema}
  />;
};

export default SignInContainer;