import { GraphQLClient } from 'graphql-request';

import reduxPersist from '../utils/reduxPersist';

const { accessToken } = reduxPersist.token();

export const url = 'https://next-store-app.herokuapp.com/graphql';

const client = new GraphQLClient(url, {
  headers: {
    Authorization: accessToken
  }
});

export default client;
