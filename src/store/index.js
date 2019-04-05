import { createStore, applyMiddleware } from 'redux'
import reducer from '../reducers'
import { composeWithDevTools } from 'redux-devtools-extension';

import api from '../middlewares/api';

const enhancer = composeWithDevTools(
    applyMiddleware(api)
);

const store = createStore(reducer, enhancer);

export default store