import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import MainReducers from './reducers/MainReducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
    MainReducers, 
    composeEnhancers(
    applyMiddleware(thunk)
    )
);

store.subscribe(() => console.log(store.getState()))

export default store;