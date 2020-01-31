import Types from '../../types';

function productState(payload) {
  return {
    type: Types.PRODUCT_STATE,
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

export { productState, addItemtoCart, removeItemtoCart };
