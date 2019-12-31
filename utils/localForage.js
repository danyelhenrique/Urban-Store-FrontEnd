import localForage from '../config/localForage';

export function localForageBag(state, payload) {
	localForage.setItem('@URBARN-STORAGE-BAG', [ ...state.userBag, payload ], (err, value) => {
		if (err) console.warn('localForage ERRO');
	});
}

export function localForageCart(state, payload) {
	localForage.setItem('@URBARN-STORAGE-CART', [ ...state.cart, payload ], (err, value) => {
		if (err) console.warn('localForage ERRO');
	});
}

export function formatLocalForagetoState(localForageArr, type, dispatch) {
	const dispatchItem = (item) => dispatch({ type, payload: item });

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
