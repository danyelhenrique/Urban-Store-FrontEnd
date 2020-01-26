import { combineReducers } from 'redux';
import cart from './cart/reducer';
import modal from './modal/reducer';
import products from './products/reducer';
import intersections from './intersections/reducer';

const rootReducer = combineReducers({
  cart,
  modal,
  products,
  intersections
});

export default rootReducer;
