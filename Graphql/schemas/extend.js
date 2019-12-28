import { gql } from 'apollo-boost';
const typeQuery = gql`
	type data {
		data: String
	}

	extend type Query {
		data: data
	}
`;
export default typeQuery;
