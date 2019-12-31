import { localForageBag, localForageCart } from './localForage';

export function clearBagDuplicateItems(state, payload) {
	const isItemtemExists = state.userBag.find((item) => item.id === payload.id);

	if (isItemtemExists) return state;

	localForageBag(state, payload);

	return { ...state, userBag: [ ...state.userBag, payload ] };
}

export function clearCartDuplicateItems(state, payload) {
	const isItemtemExists = state.cart.find((item) => item.id === payload.id);

	if (isItemtemExists) return state;

	localForageCart(state, payload);

	return { ...state, cart: [ ...state.cart, payload ] };
}
