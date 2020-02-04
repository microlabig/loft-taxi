import { createStore, combineReducers, compose, applyMiddleware } from 'redux';

import user, { userMiddleware } from './user';
import card, { cardMiddleware } from './card';
import address, { addressMiddleware } from './address';

export default createStore(
    combineReducers({
        user,
        card,
        address
    }),
    compose(
        applyMiddleware(userMiddleware),
        applyMiddleware(cardMiddleware),
        applyMiddleware(addressMiddleware),
        window.__REDUX_DEVTOOLS_EXTENSION__
            ? window.__REDUX_DEVTOOLS_EXTENSION__
            : noop => noop
    )
); 