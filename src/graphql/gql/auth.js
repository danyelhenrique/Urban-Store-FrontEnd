import { gql } from 'apollo-boost';

export const SIGN_IN = gql`
  mutation signIn($email: String!, $password: String!) {
    loginUser(data: { email: $email, password: $password })
  }
`;

export const SIGN_UP = gql`
  mutation signUp($name: String!, $email: String!, $password: String!) {
    storeUser(data: { name: $name, email: $email, password: $password }) {
      id
      name
    }
  }
`;

export const Token = gql`
  query validateToken($token: String) {
    validateToken(token: $token)
  }
`;
