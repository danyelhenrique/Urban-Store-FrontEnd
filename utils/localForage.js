import localForage, { localForageToken } from '../config/localForage';

export async function localForageBag(state, payload) {
  try {
    await localForage.setItem('@URBARN-STORAGE-BAG', [
      ...state.userBag,
      payload,
    ]);
  } catch (error) {
    console.warn('localForage err');
  }
}

export async function localForageCart(state, payload) {
  try {
    await localForage.setItem('@URBARN-STORAGE-CART', [...state.cart, payload]);
  } catch (error) {
    console.warn('localForage err');
  }
}

export function removeItem(id) {
  const removeItems = async value => {
    const rm = value.filter(itemStorage => itemStorage.id !== id);
    await localForage.setItem('@URBARN-STORAGE-CART', [...rm]);
  };
  const items = localForage.iterate(removeItems);
}

export async function removeToken() {
  await localForageToken.clear();
}

export async function storeToken(payload) {
  await localForageToken.setItem('@STORE-TOKEN', payload.token);
}
