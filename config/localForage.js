// import * as localforage from 'localforage';
const isBrowser = typeof window !== 'undefined';
let localforage;
/*
  *Import localforage dynamic because
  *on SSR localforage is not running on methods call
  *and throw Erro
*/

if(isBrowser){
   localforage = require('localforage')
}

localforage && localforage.config({
  driver:[
    localforage.INDEXEDDB,
    localforage.WEBSQL,
    localforage.LOCALSTORAGE,
  ],
  name: '@URBAN-STORE',
});

const store = localforage && localforage.createInstance({
  name: '@URBAN-STORE-STORAGE'
});

export const localForageToken = localforage && localforage.createInstance({
  name: '@USER_TOKEN'
});

export default store;
