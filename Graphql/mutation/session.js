import { gql } from 'apollo-boost'
const typeDefs = gql`
	extend type Mutation {
		loginUser(data: AuthInput!): Auth
	}
`

export default typeDefs
