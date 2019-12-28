import { gql } from 'apollo-boost'
const typeDefs = gql`
	type Auth {
		token: String
	}
`

export default typeDefs
