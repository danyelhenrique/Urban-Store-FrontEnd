import Types from '../../types';

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
    case Types.INITIAL_CART: {
      const { data } = action.payload;

      const total = data.reduce((accumulator, currentValue) => {
        const sum = accumulator + Number(currentValue.data_price);

        return sum;
      }, 0);

      const cartValues = {
        ...state.cartValues,
        total
      };

      return {
        ...state,
        cart: data,
        cartValues
      };
    }
    case Types.ADD_CART: {
      const { id, data_price } = action.payload;
      //   let { qntRequest } = action.payload;

      const isItemtemExists = state.cart.find(item => item.id === id);

      if (isItemtemExists) return state;

      action.payload.qntRequest = 1;

      //   localForageCart(state, action.payload);
      const cartSum = state.cart.reduce((accumulator, currentValue) => {
        const sum = accumulator + Number(currentValue.data_price);

        return sum;
      }, 0);

      const total = Number(data_price) + cartSum;
      const cartValues = {
        ...state.cartValues,
        total
      };

      return {
        ...state,
        cart: [...state.cart, action.payload],
        cartValues
      };
    }
    case Types.REMOVE_ITEM_FROM_CART: {
      const { id } = action.payload;
      const items = state.cart.filter(cartItem => cartItem.id !== id);

      //   removeItem(payload.id);

      const newState = {
        ...state,
        cart: [...items]
      };

      const cartSum = state.cart.reduce((accumulator, currentValue) => {
        const sum = accumulator - Number(currentValue.data_price);

        return sum;
      }, 0);

      const total = Math.abs(cartSum);

      const cartValues = {
        ...state.cartValues,
        total
      };

      return {
        ...newState,
        cartValues: { ...cartValues }
      };
    }
    default:
      return state;
  }
}

export default cart;
