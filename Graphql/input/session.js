import { gql } from 'apollo-boost'
const typeDefs = gql`
	input AuthInput {
		name: String!
		email: String!
		password: String!
	}
`

export default typeDefs
