import { combineReducers } from 'redux';
import cart from './cart/reducer';
import modal from './modal/reducer';
import products from './products/reducer';
import user from './user/reducer';

import intersections from './intersections/reducer';

const rootReducer = combineReducers({
  cart,
  modal,
  products,
  intersections,
  user
});

export default rootReducer;
