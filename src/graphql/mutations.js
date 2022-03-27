import { gql } from '@apollo/client';

export const SIGN_IN = gql`
  mutation authenticate($credentials: AuthenticateInput){
    authenticate(credentials: $credentials) {
      accessToken
    }
  }
`;


export const CREATE_REVIEW = gql`
  mutation createReview($review: CreateReviewInput){
    createReview(review: $review) {
      repository {
        name
        id
      }
      rating
      createdAt
      text
      user {
        username
      }
    }
  }
`;