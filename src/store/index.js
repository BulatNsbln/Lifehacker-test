import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';

import api from '../middlewares/api';
import reducer from '../reducers'

const enhancer = composeWithDevTools(
    applyMiddleware(api)
);

const store = createStore(reducer, enhancer);

export default store
