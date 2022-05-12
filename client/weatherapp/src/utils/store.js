import { legacy_createStore as createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers/index';
import thunk from 'redux-thunk'; //Actions that have async function need a middleware.


const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;