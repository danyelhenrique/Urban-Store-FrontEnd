import { gql } from 'apollo-boost';

const typeDefs = gql`
	input UserInput {
		name: String
		email: String
		password: String
	}
`;

export default typeDefs;
