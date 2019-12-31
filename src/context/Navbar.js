import React, { useReducer, useEffect } from 'react';
import localForage from '../../config/localForage';

const isBrowser = typeof window !== 'undefined';

const INITIAL_STATE = {
	isScroll: false,
	isModalOpen: false,
	userBag: [],
	cart: []
};

function store(state, payload) {
	localForage.setItem('@URBARN-STORAGE-BAG', [ ...state.userBag, payload ], (err, value) => {
		if (err) console.warn('localForage ERRO');
	});
}

function clearBagDuplicateItems(state, payload) {
	const isItemtemExists = state.userBag.find((item) => item.id === payload.id);

	if (isItemtemExists) return state;

	store(state, payload);

	return { ...state, userBag: [ ...state.userBag, payload ] };
}

function clearCartDuplicateItems(state, payload) {
	const isItemtemExists = state.cart.find((item) => item.id === payload.id);

	if (isItemtemExists) return state;

	// const cart = JSON.stringify(payload);

	// localStorage.setItem('@URBARN-STORAGE-CART', cart);

	return { ...state, cart: [ ...state.cart, payload ] };
}

function reducer(state, action) {
	switch (action.type) {
		case '@IS_ISCROLL':
			return { ...state, isScroll: action.payload };
		case '@IS_BAG_OPEN':
			return { ...state, isModalOpen: !state.isModalOpen };
		case '@ADD_BAG_ITEM':
			return clearBagDuplicateItems(state, action.payload);
		case '@ADD_CART_ITEM':
			return clearCartDuplicateItems(state, action.payload);
		default:
			return state;
	}
}
function formatLocalForagetoState(localForageArr, dispatch) {
	const dispatchItem = (item) => dispatch({ type: '@ADD_BAG_ITEM', payload: item });

	const itemsArray = (objectOrArray) => {
		if (typeof objectOrArray === 'object') {
			dispatchItem(objectOrArray);
		}
		if (Array.isArray(objectOrArray)) {
			objectOrArray.map((obj) => {
				dispatchItem(obj);
			});
		}
	};

	localForageArr.map((item) => itemsArray(item));
}

export const NavBarContext = React.createContext({});

export default function context({ children }) {
	const [ state, dispatch ] = useReducer(reducer, INITIAL_STATE);

	useEffect(() => {
		async function getItemsFromLocalHistorage() {
			const dbName = '@URBARN-STORAGE-BAG';

			const localKeys = await localForage.keys();

			const isExists = localKeys.includes(dbName);

			if (isExists) {
				const items = await localForage.getItem(dbName);
				formatLocalForagetoState(items, dispatch);
				// console.log(items)
				// formatLocalForagetoState(items, dispatch);
			}
			// dispatch({ type: '@ADD_BAG_ITEM', payload: item });

			// localForage
			// 	.keys()
			// 	.then(function(keys) {
			// 		// An array of all the key names.
			// 	})
			// 	.catch(function(err) {
			// 		// This code runs if there were any errors
			// 		console.log(err);
			// 	});
			// if (localStorage.hasOwnProperty('@URBARN-STORAGE-BAG')) {
			// 	const bagItem = localStorage.getItem('@URBARN-STORAGE-BAG');
			// 	console.log(bagItem);
			// 	const [ Ob ] = JSON.parse(bagItem);
			// 	dispatch({ type: '@ADD_BAG_ITEM', payload: Ob });
			// }
			// if (localStorage.hasOwnProperty('@URBARN-STORAGE-CART')) {
			// 	const cartItem = localStorage.getItem('@URBARN-STORAGE-CART');
			// 	dispatch({ type: '@ADD_CART_ITEM', payload: cartItem });
			// }
			//
		}
		getItemsFromLocalHistorage();
	}, []);

	return <NavBarContext.Provider value={[ state, dispatch ]}>{children}</NavBarContext.Provider>;
}
