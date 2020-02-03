import Types from '../../types';

const INITIAL_STATE = {
  products: [],
  loading: true
};

function product(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.PRODUCT_STATE:
      return { ...state, products: [...state.products, ...action.payload] };
    case Types.PRODUCT_LOADING:
      return { ...state, loading: action.payload };
    default:
      return state;
  }
}

export default product;
