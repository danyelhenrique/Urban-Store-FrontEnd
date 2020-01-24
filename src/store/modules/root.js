import { combineReducers } from 'redux';
import cart from './cart/reducer';
import modal from './modal/reducer';
import products from './products/reducer';

const rootReducer = combineReducers({
  cart,
  modal,
  products
});

export default rootReducer;
