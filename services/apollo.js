import {
  ApolloClient,
  InMemoryCache,
  HttpLink,
  ApolloLink,
} from "apollo-boost";

import { setContext } from "apollo-link-context";

import { localForageToken } from "../config/localForage";


import fetch from "node-fetch";

let apolloClient = null;

function create(initialState) {
  const cache = new InMemoryCache({
    dataIdFromObject: o =>
      o.id ? `${o.__typename}-${o.id}` : `${o.__typename}-${o.cursor}`
  }).restore(initialState || {});

  const middleWareLink = new ApolloLink((operation, forward) => {
    if (operation.variables) {
      const omitTypename = (key, value) =>
        key === "__typename" ? undefined : value;
      // eslint-disable-next-line no-param-reassign
      operation.variables = JSON.parse(
        JSON.stringify(operation.variables),
        omitTypename
      );
    }
    return forward(operation);
  });
  const isBrowser = typeof window !== "undefined";
  
  const authLink = setContext(async (_, { headers }) => {
    const accessToken = await localForageToken.getItem("@STORE-TOKEN");


    console.log("accessToken", accessToken);

    return {
      headers: {
        ...headers,
        Authorization: accessToken ? `Bearer ${accessToken}` : ""
      }
    };
  });

  const http = new HttpLink({
    uri: "http://localhost:3333/graphql",
    //   credentials: 'same-origin', // Additional fetch() options like `credentials` or `headers`
    fetch: !isBrowser && fetch,
    resolvers: {}
  });

  const link = ApolloLink.from([middleWareLink, authLink, http]);

  const client = new ApolloClient({
    connectToDevTools: isBrowser,
    ssrMode: !isBrowser,
    link,
    cache
  });

  return client;
}

export default function initApollo(initialState) {
  if (typeof window === "undefined") {
    return create(initialState);
  }

  if (!apolloClient) {
    apolloClient = create(initialState);
  }

  return apolloClient;
}