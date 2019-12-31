import { store } from './localForage';

export function clearDuplicateItems(state, typeState, payload) {
	const isItemtemExists = state[`${typeState}`].find((item) => item.id === payload.id);

	if (isItemtemExists) return state;

	store(state, typeState, payload);

	return { ...state, [`${typeState}`]: [ ...state[`${typeState}`], payload ] };
}

export function clearCartDuplicateItems(state, payload) {
	const isItemtemExists = state.cart.find((item) => item.id === payload.id);

	if (isItemtemExists) return state;

	return { ...state, cart: [ ...state.cart, payload ] };
}
