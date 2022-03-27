import { Pressable, View, StyleSheet, ScrollView } from 'react-native';
import { useNavigate } from 'react-router-native';
import { Formik } from 'formik';
import * as Yup from 'yup';


import FormikTextInput from './FormikTextInput';
import Text from './Text';

import theme from '../theme';

import useCreateReview from './../hooks/useCreateReview.js';

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

  createReview: {
    backgroundColor: theme.colors.primary,
    color: 'white',
    padding: 16,
    margin: 8,
    borderRadius: 4,
    textAlign: 'center'
  }
});


const CreateReviewPage = () => {
  
  const [createReview] = useCreateReview();
  const navigate = useNavigate();
  
  const onSubmit = async ({ repositoryName, ownerName, rating, text }) => {
    try {
      const review = { repositoryName, ownerName, rating: parseInt(rating), text };
      const data = await createReview(review);
      const navigateTo = `/detail/${data.createReview.repository.id}`;
      navigate(navigateTo);
    }
    catch (e) {
      console.log(e);
    }
  };

  const initialValues = {
    repositoryName: '',
    ownerName: '',
    rating: '',
    text: ''
  };

  const validationSchema = Yup.object().shape({
    repositoryName: Yup.string().required('Repository name is required'),
    ownerName: Yup.string().required('Repository owner name is required'),
    rating: Yup.number().required('Rating is required').min(0, 'Rating between 0 and 100').max(100, 'Rating between 0 and 100'),
    text: Yup.string().notRequired()
  });

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {
        ({ handleSubmit }) => {
          return (
            <View style={styles.container}>
              <ScrollView>
                <FormikTextInput
                  name='ownerName'
                  placeholder='Repository owner name'
                  style={styles.formInputField}
                />

                <FormikTextInput
                  name='repositoryName'
                  placeholder='Repository name'
                  style={styles.formInputField}
                />

                <FormikTextInput
                  name='rating'
                  placeholder='Rating between 0 and 100'
                  style={styles.formInputField}
                />

                <FormikTextInput
                  name='text'
                  placeholder='Review'
                  style={styles.formInputField}
                  multiline={true}
                />

                <Pressable onPress={handleSubmit}>
                  <Text style={styles.createReview}>Create a review</Text>
                </Pressable>
              </ScrollView>
            </View>
          );
        }
      }
    </Formik>
  );
};

export default CreateReviewPage;