import { GraphQLClient } from 'graphql-request';

import reduxPersist from '../utils/reduxPersist';

const { accessToken } = reduxPersist.token();

const client = new GraphQLClient('http://localhost:4594/graphql', {
  headers: {
    Authorization: accessToken
  }
});

export default client;
