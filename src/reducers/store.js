import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import setting from './setting';
import data from './inicio'

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const rootReducer = combineReducers({
   setting,
   data
});

export default createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));