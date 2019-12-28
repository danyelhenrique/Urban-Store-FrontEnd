import { gql } from 'apollo-boost';
const typeQuery = gql`
	extend type Mutation {
		storeProduct(input: ProductInput!): Product
		destroyProduct(id: ID!): Boolean
		updateProduct(id: ID!, input: ProductInput): Product
	}

	extend type Product {
		testeProduct(type: Boolean): Boolean
	}
`;
export default typeQuery;
