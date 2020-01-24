import { createStore } from 'redux';

import reducers from './modules/root';

const store = createStore(reducers);

export default store;
