import { createStore,combineReducers,applyMiddleware } from 'redux';
import { bankReducer } from './reducers/bank_reduser';
import { productsReducer } from './reducers/products_reducer';
import thunk from 'redux-thunk';

const appReducer =  combineReducers({
    bank : bankReducer,
    products:productsReducer
})
export const store = createStore(appReducer,applyMiddleware(thunk))