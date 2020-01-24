import Types from '../../types';

function intialCart(payload) {
  return {
    type: Types.INITIAL_CART,
    payload
  };
}

function addItemtoCart(payload) {
  return {
    type: Types.ADD_CART,
    payload
  };
}

function removeItemtoCart(payload) {
  return {
    type: Types.REMOVE_ITEM_FROM_CART,
    payload
  };
}

export { intialCart, addItemtoCart, removeItemtoCart };
