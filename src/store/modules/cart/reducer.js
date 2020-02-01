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
    default:
      return state;
  }
}

export default cart;
