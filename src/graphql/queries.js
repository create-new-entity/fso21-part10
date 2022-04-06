import { gql } from '@apollo/client';

export const ME = gql`
  query me ($includeReviews: Boolean = false) {
    me {
      id
      reviews @include(if: $includeReviews) {
        pageInfo {
          endCursor
          hasNextPage
        }
        edges {
          cursor
          node {
            id
              text
              rating
              createdAt
              user {
                id
                username
              }
          }
        }
      }
    }
  }
`;

export const GET_REPOSITORY = gql`
  query repository($id: ID!, $first: Int, $after: String) {
    repository(id: $id) {
      id
      fullName
      description
      language
      forksCount
      stargazersCount
      ratingAverage
      reviewCount
      ownerAvatarUrl
      reviews(first: $first, after: $after) {
        edges {
          cursor
          node {
            id
            text
            rating
            createdAt
            user {
              id
              username
            }
          }
        }
        pageInfo {
          endCursor
          hasNextPage
        }
      }
      url
    }
  }
`;

export const GET_REPOSITORIES = gql`
  query repositories($first: Int, $after: String, $orderBy: AllRepositoriesOrderBy, $orderDirection: OrderDirection, $searchKeyword: String) {
    repositories(first: $first, after: $after, orderBy: $orderBy, orderDirection: $orderDirection, searchKeyword: $searchKeyword) {
      totalCount
      pageInfo {
        hasNextPage
        startCursor
        endCursor
      }
      edges {
        cursor
        node {
          id
          fullName
          description
          language
          forksCount
          stargazersCount
          ratingAverage
          reviewCount
          ownerAvatarUrl
        }
      }
    }
  }
`;