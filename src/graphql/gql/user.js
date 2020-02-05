import { gql } from 'apollo-boost';

const updateUser = gql`
  mutation update($id: ID!, $input: UserInput) {
    updateUser(id: $id, input: $input)
  }
`;

export { updateUser };
