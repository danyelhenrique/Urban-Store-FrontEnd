import Root from './root';

import { makeExecutableSchema } from 'graphql-tools';
import { productMutation } from './mutation';
import { productQuery } from './query';
import { productType } from './types';

const typeDefs = [ Root, productQuery, productMutation, productType ];

const schema = makeExecutableSchema({
	typeDefs
});
export default schema;
