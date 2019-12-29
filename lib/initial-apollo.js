import { ApolloClient, InMemoryCache, HttpLink, ApolloLink, from } from 'apollo-boost';

import fetch from 'node-fetch';
import typeDefs from '../Graphql';
import resolvers from '../Graphql/resolvers';

let apolloClient = null;

function create(initialState) {
	const cache = new InMemoryCache({
		dataIdFromObject: (o) => (o.id ? `${o.__typename}-${o.id}` : `${o.__typename}-${o.cursor}`)
	}).restore(initialState || {});

	const middleWareLink = new ApolloLink((operation, forward) => {
		if (operation.variables) {
			const omitTypename = (key, value) => (key === '__typename' ? undefined : value);
			// eslint-disable-next-line no-param-reassign
			operation.variables = JSON.parse(JSON.stringify(operation.variables), omitTypename);
		}
		return forward(operation);
	});

	cache.writeData({
		data: {
			isConnected: false,
			isScroll: false,
			items: []
		}
	});

	const isBrowser = typeof window !== 'undefined';

	const http = new HttpLink({
		uri: 'http://localhost:3333/graphql',
		//   credentials: 'same-origin', // Additional fetch() options like `credentials` or `headers`
		// Use fetch() polyfill on the server
		fetch: !isBrowser && fetch,
		typeDefs,
		resolvers
	});
	const link = ApolloLink.from([ middleWareLink, http ]);
	// Check out https://github.com/zeit/next.js/pull/4611 if you want to use the AWSAppSyncClient

	const client = new ApolloClient({
		connectToDevTools: isBrowser,
		ssrMode: !isBrowser, // Disables forceFetch on the server (so queries are only run once)
		link,
		cache
	});

	return client;
}

export default function initApollo(initialState) {
	// Make sure to create a new client for every server-side request so that data
	// isn't shared between connections (which would be bad)
	if (typeof window === 'undefined') {
		return create(initialState);
	}

	// Reuse client on the client-side
	if (!apolloClient) {
		apolloClient = create(initialState);
	}

	return apolloClient;
}
