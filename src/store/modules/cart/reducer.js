import Types from '../../types';
import { SubCartItems, SumCartItems } from '../utils/cart';

const INITIAL_STATE = {
  cart: [],
  cartValues: {
    order: 0,
    total: 0,
    discont: 0,
    qnt: 1,
    shipping: 'Free'
  }
};

function cart(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.ADD_CART: {
      const { id } = action.payload;

      const isItemtemExists = state.cart.find(item => item.id === id);

      if (isItemtemExists) return state;

      action.payload.qntRequest = 1;

      const cartValues = SumCartItems(state, action.payload);

      return { ...state, cart: [...state.cart, action.payload], cartValues };
    }
    case Types.REMOVE_ITEM_FROM_CART: {
      const { id } = action.payload;
      const items = state.cart.filter(cartItem => cartItem.id !== id);

      const newState = { ...state, cart: [...items] };
      const cartValues = SubCartItems(newState);

      return { ...newState, cartValues: { ...cartValues } };
    }
    case Types.INCREASE_QNT_ITEM_MORE_ONE: {
      const { id } = action.payload;

      const newState = { ...state };

      const index = newState.cart.findIndex(item => item.id === id);

      if (newState.cart[index].qntRequest >= newState.cart[index].qnt) {
        return state;
      }

      newState.cart[index].qntRequest += 1;

      return { ...newState };
    }
    case Types.DECREASE_QNT_ITEM_LESS_ONE: {
      const { id } = action.payload;

      const newState = { ...state };

      const index = newState.cart.findIndex(item => item.id === id);

      if (newState.cart[index].qntRequest <= 1) {
        return state;
      }

      newState.cart[index].qntRequest -= 1;

      return { ...newState };
    }
    default:
      return state;
  }
}

export default cart;
