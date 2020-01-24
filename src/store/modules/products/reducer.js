import Types from '../../types';

const INITIAL_STATE = [];

function product(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.PRODUCT_STATE:
      return { ...state, products: [...state.products, ...action.payload] };
    default:
      return state;
  }
}

export default product;
