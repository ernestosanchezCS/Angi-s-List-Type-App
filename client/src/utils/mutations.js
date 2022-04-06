import { gql } from "@apollo/client";

export const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($fullName: String!, $email: String!, $password: String!) {
    addUser(fullName: $fullName, email: $email, password: $password) {
      token

      user {
        _id
      }
    }
  }
`;

export const ADD_BUSINESS = gql`
  mutation addBusiness(
    $name: String!
    $description: String!
    $category: String!
    $id: String!
  ) {
    addBusiness(
      id: $id
      name: $name
      description: $description
      category: $category
    ) {
      name
    }
  }
`;
