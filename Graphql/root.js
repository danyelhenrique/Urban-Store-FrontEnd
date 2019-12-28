import { gql } from 'apollo-boost';

const typeRoot = gql`
	type Query {
		root: String!
	}

	type Mutation {
		root: String!
	}
`;

export default typeRoot;
