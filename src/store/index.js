import Root from './root';

import { makeExecutableSchema } from 'graphql-tools';
import { productMutation } from './mutation';
import { productQuery } from './query';
import { productType } from './types';
// import resolvers from './resolvers';

const typeDefs = [ Root, productQuery, productMutation, productType ];

const schema = makeExecutableSchema({
	typeDefs
	// resolvers,
});
export default schema;
