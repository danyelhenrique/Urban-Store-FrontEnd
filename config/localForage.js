import * as localforage from 'localforage';

const driver = localforage.setDriver([
  localforage.INDEXEDDB,
  localforage.WEBSQL,
  localforage.LOCALSTORAGE,
]);

localforage.config({
  driver,
  name: '@URBAN-STORE',
});

const store = localforage.createInstance({
  name: '@URBAN-STORE-STORAGE',
});

export const localForageToken = localforage.createInstance({
  name: '@USER_TOKEN',
});

export default store;
