import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import reducers from './modules/root';

const store = createStore(reducers, composeWithDevTools());

export default store;
