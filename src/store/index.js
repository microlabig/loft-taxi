import { createStore, combineReducers, compose, applyMiddleware } from 'redux';

import userReducer, { userMiddleware } from './user';
import cardReducer, { cardMiddleware } from './card';
import addressReducer, { addressMiddleware } from './address';

const rootReducer = combineReducers({
    userReducer,
    cardReducer,
    addressReducer
})

export default createStore(
    rootReducer,
    compose(
        applyMiddleware(userMiddleware),
        applyMiddleware(cardMiddleware),
        applyMiddleware(addressMiddleware),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
        // window.__REDUX_DEVTOOLS_EXTENSION__
        //     ? window.__REDUX_DEVTOOLS_EXTENSION__
        //     : noop => noop
    )
); 