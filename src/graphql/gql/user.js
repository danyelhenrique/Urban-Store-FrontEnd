const updateUser = `
  mutation update($id: ID!, $input: UserInput) {
    updateUser(id: $id, input: $input)
  }
`;

export { updateUser };
