import React, { useReducer } from 'react';

const INITIAL_STATE = {
	isScroll: false,
	isModalOpen: false
};

function reducer(state, action) {
	switch (action.type) {
		case '@IS_ISCROLL':
			return { ...state, isScroll: action.payload };
		case '@IS_BAG_OPEN':
			return { ...state, isModalOpen: !state.isModalOpen };
		default:
			return { ...state };
	}
}

export const NavBarContext = React.createContext({});

export default function context({ children }) {
	const [ state, dispatch ] = useReducer(reducer, INITIAL_STATE);

	return <NavBarContext.Provider value={[ state, dispatch ]}>{children}</NavBarContext.Provider>;
}
