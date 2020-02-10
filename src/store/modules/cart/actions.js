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

function increaseQntItemMoreOne(payload) {
  return {
    type: Types.INCREASE_QNT_ITEM_MORE_ONE,
    payload
  };
}
function decreaseQntItemLessOne(payload) {
  return {
    type: Types.DECREASE_QNT_ITEM_LESS_ONE,
    payload
  };
}

function changeQntItemImput(payload) {
  return {
    type: Types.CHANGE_QNT_ITEM_INPUT,
    payload
  };
}

function checkout() {
  return {
    type: Types.CHECKOUT
  };
}

export {
  productState,
  addItemtoCart,
  removeItemtoCart,
  increaseQntItemMoreOne,
  decreaseQntItemLessOne,
  changeQntItemImput,
  checkout
};
