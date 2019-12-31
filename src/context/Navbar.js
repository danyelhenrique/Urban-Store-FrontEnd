import React, { useReducer, useEffect } from 'react';

const isBrowser = typeof window !== 'undefined';

const INITIAL_STATE = {
	isScroll: false,
	isModalOpen: false,
	userBag: [],
	cart: []
};

function clearBagDuplicateItems(state, payload) {
	const isItemtemExists = state.userBag.find((item) => item.id === payload.id);

	if (isItemtemExists) return state;

	const data = { ...state.userBag, payload };

	const userBag = JSON.stringify(payload);

	localStorage.setItem('@URBARN-STORAGE-BAG', userBag);

	return { ...state, userBag: [ ...state.userBag, payload ] };
}

function clearCartDuplicateItems(state, payload) {
	const isItemtemExists = state.cart.find((item) => item.id === payload.id);

	if (isItemtemExists) return state;

	const data = { ...state.cart, payload };

	const cart = JSON.stringify(payload);

	localStorage.setItem('@URBARN-STORAGE-CART', cart);

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

export const NavBarContext = React.createContext({});

export default function context({ children }) {
	const [ state, dispatch ] = useReducer(reducer, INITIAL_STATE);

	useEffect(() => {
		function getItemsFromLocalHistorage() {
			if (localStorage.hasOwnProperty('@URBARN-STORAGE-BAG')) {
				const bagItem = localStorage.getItem('@URBARN-STORAGE-BAG');
				dispatch({ type: '@ADD_BAG_ITEM', payload: bagItem });
			}

			if (localStorage.hasOwnProperty('@URBARN-STORAGE-CART')) {
				const cartItem = localStorage.getItem('@URBARN-STORAGE-CART');
				dispatch({ type: '@ADD_CART_ITEM', payload: cartItem });
			}
			console.log(state);
			//
		}
		getItemsFromLocalHistorage();
	}, []);

	return <NavBarContext.Provider value={[ state, dispatch ]}>{children}</NavBarContext.Provider>;
}
