export const SIGN_IN = `
  mutation signIn($email: String!, $password: String!) {
    loginUser(data: { email: $email, password: $password })
  }
`;

export const SIGN_UP = `
  mutation signUp($name: String!, $email: String!, $password: String!) {
    storeUser(data: { name: $name, email: $email, password: $password }) {
      id
      name
    }
  }
`;

export const Token = `
  query validateToken($token: String) {
    validateToken(token: $token)
  }
`;
