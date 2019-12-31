import * as localforage from 'localforage';

const driver = localforage.setDriver([ localforage.INDEXEDDB, localforage.WEBSQL, localforage.LOCALSTORAGE ]);

localforage.config({
	driver,
	name: '@URBAN-STORE'
});

const store = localforage.createInstance({
	name: '@URBAN-STORE-ALGO'
});

export default store;
