/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-confusing-arrow */

import {
  ApolloClient,
  InMemoryCache,
  HttpLink,
  ApolloLink
} from 'apollo-boost';

import { setContext } from 'apollo-link-context';

import fetch from 'node-fetch';
// import { localForageToken } from '../config/localForage';

let apolloClient = null;

function create(initialState) {
  const cache = new InMemoryCache({
    dataIdFromObject: object =>
      object.id ? `${object.__typename}-${object.id}` : `${object.__typename}`
  }).restore(initialState || {});

  const middleWareLink = new ApolloLink((operation, forward) => {
    if (operation.variables) {
      const omitTypename = (key, value) =>
        key === '__typename' ? undefined : value;
      operation.variables = JSON.parse(
        JSON.stringify(operation.variables),
        omitTypename
      );
    }
    return forward(operation);
  });

  const isBrowser = typeof window !== 'undefined';

  const authLink = setContext(async (_, { headers }) => {
    const accessToken = isBrowser ? localStorage.getItem('@STORE-TOKEN') : '';

    return {
      headers: {
        ...headers,
        Authorization: `Bearer ${accessToken}`
      }
    };
  });

  const http = new HttpLink({
    uri: 'http://localhost:4594/graphql',
    fetch: !isBrowser && fetch
  });

  const link = ApolloLink.from([middleWareLink, authLink, http]);

  const client = new ApolloClient({
    connectToDevTools: isBrowser,
    // ssrMode: true,
    ssrMode: !isBrowser,
    link,
    cache,
    resolvers: {}
  });

  return client;
}

export default function initApollo(initialState) {
  if (typeof window === 'undefined') {
    return create(initialState);
  }

  if (!apolloClient) {
    apolloClient = create(initialState);
  }

  return apolloClient;
}
