import { createStore } from 'redux';

import reducers from './modules/root';

const composeEnhancers =
  typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;

const store = createStore(reducers, composeEnhancers());

export default store;
