import localForage from '../config/localForage';

export function store(state, typeState, payload) {
	localForage.setItem('@URBARN-STORAGE-BAG', [ ...state[`${typeState}`], payload ], (err, value) => {
		if (err) console.warn('localForage ERRO');
	});
}

export function formatLocalForagetoState(localForageArr, type, dispatch) {
	const dispatchItem = (item) => dispatch({ type, payload: item });
	// const dispatchItem = (item) => dispatch({ type: '@ADD_BAG_ITEM', payload: item });

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
