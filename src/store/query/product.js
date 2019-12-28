import { gql } from 'apollo-boost';

const typeQuery = gql`
	extend type Query {
		indexProduct(page: Int, limit: Int): [Product]
		showProduct(id: ID!): Product
	}
`;
export default typeQuery;
