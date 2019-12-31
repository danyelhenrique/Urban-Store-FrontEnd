import React, { useReducer, useEffect } from 'react';
import localForage from '../../config/localForage';

import { clearDuplicateItems } from '../../utils/reducers';

import { formatLocalForagetoState } from '../../utils/localForage';

import Types from './types';
import TypeOfState from './state';

const INITIAL_STATE = { ...TypeOfState };

function reducer(state, action) {
	switch (action.type) {
		case '@IS_ISCROLL':
			return { ...state, isScroll: action.payload };
		case '@IS_BAG_OPEN':
			return { ...state, isModalOpen: !state.isModalOpen };
		case '@ADD_BAG_ITEM':
			return clearDuplicateItems(state, 'userBag', action.payload);
		case '@ADD_CART_ITEM':
			return clearDuplicateItems(state, 'cart', action.payload);
		default:
			return state;
	}
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
				formatLocalForagetoState(items, Types.ADD_BAG, dispatch);
			}
		}
		getItemsFromLocalHistorage();
	}, []);

	return <NavBarContext.Provider value={[ state, dispatch ]}>{children}</NavBarContext.Provider>;
}
