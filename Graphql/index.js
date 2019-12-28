import Root from './root';

import { makeExecutableSchema } from 'graphql-tools';
import { sessionSchema, productSchema, purchaseSchema, userSchema, extendSchema } from './schemas';
import { productQuery, purchaseQuery, userQuery } from './query';
import { session, product, purchase, user } from './input';
import { sessionMutation, productMutation, purchaseMutation, userMutation } from './mutation';
import resolvers from './resolvers';

const typeDefs = [
	Root,
	extendSchema,
	sessionSchema,
	productSchema,
	purchaseSchema,
	userSchema,
	userSchema,
	productQuery,
	purchaseQuery,
	userQuery,
	sessionMutation,
	productMutation,
	purchaseMutation,
	userMutation,
	session,
	product,
	purchase,
	user
];

const schema = makeExecutableSchema({
	typeDefs
});
export default schema;
