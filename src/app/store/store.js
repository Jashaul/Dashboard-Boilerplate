import { createStore, applyMiddleware, compose } from 'redux';
import { persistCombineReducers } from 'redux-persist'
import storage from 'redux-persist/lib/storage';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import rootReducer from '../reducers';
import initalData from '../data/initialState.json';

const persistConfig = {
    key: 'root',
    storage,
};

const reducer = persistCombineReducers(persistConfig, rootReducer);

const store = createStore(
    reducer,
    initalData,
    process.env.NODE_ENV==="development"?composeWithDevTools(applyMiddleware(thunk)):compose(applyMiddleware(thunk))
);

export default store;