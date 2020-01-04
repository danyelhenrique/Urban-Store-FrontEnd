import localForage from "../config/localForage";

export async function localForageBag(state, payload) {
  try {
    await localForage.setItem("@URBARN-STORAGE-BAG", [
      ...state.userBag,
      payload
    ]);
  } catch (error) {
    console.warn("localForage err");
  }
}

export async function localForageCart(state, payload) {
  try {
    await localForage.setItem("@URBARN-STORAGE-CART", [...state.cart, payload]);
  } catch (error) {
    console.warn("localForage err");
  }
}

export function formatLocalForagetoState(localForageArr, type, dispatch) {
  const dispatchItem = item => dispatch({ type, payload: item });

  const itemsArray = objectOrArray => {
    if (typeof objectOrArray === "object") {
      dispatchItem(objectOrArray);
    }
    if (Array.isArray(objectOrArray)) {
      objectOrArray.map(obj => {
        dispatchItem(obj);
      });
    }
  };

  localForageArr.map(item => itemsArray(item));
}
