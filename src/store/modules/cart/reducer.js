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
      const { id, data_price } = action.payload;

      const isItemtemExists = state.cart.find(item => item.id === id);

      if (isItemtemExists) return state;

      action.payload.qntRequest = 1;
      action.payload.total = 1 * data_price;

      const newState = { ...state, cart: [...state.cart, action.payload] };

      const cartValues = SumCartItems(newState);

      return { ...newState, cartValues };
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

      const cartValues = SubCartItems(newState);

      return { ...newState, cartValues };
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
    case Types.CHANGE_QNT_ITEM_INPUT: {
      const { id, data_price } = action.payload.item;
      const { value: valueStr } = action.payload;

      const value = Number(valueStr);

      const isValid = Number.isInteger(value);

      const newState = { ...state };

      const index = newState.cart.findIndex(item => item.id === id);

      if (value > newState.cart[index].qnt) {
        return state;
      }

      if (!isValid) return state;

      newState.cart[index].qntRequest = value;
      newState.cart[index].total = value * data_price;

      const cartValues = SumCartItems(newState);

      return { ...newState, cartValues };
    }
    default:
      return state;
  }
}

export default cart;
