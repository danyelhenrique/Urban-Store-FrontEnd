import { gql } from 'apollo-boost'
const typeDefs = gql`
	extend type Query {
		indexUser(offset: String, limit: String): [User]
		showUser(id: ID!): User
	}
`

export default typeDefs
