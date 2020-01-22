import * as localforage from 'localforage';

/*
 *import localforage on SSR throw Erro  because *storage* method
 *try to acess browser on server.
 */

localforage.config({
  driver: [localforage.INDEXEDDB, localforage.WEBSQL, localforage.LOCALSTORAGE],
  name: '@URBAN-STORE'
});

const store = localforage.createInstance({
  name: '@URBAN-STORE-STORAGE'
});

export const localForageToken = localforage.createInstance({
  name: '@USER_TOKEN'
});

export default store;
