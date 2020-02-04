import { createStore, combineReducers, compose, applyMiddleware } from 'redux';

import user, { userMiddleware } from './user';
import card, { cardMiddleware } from './card';

export default createStore(
    combineReducers({
        user,
        card
    }),
    compose(
        applyMiddleware(userMiddleware),
        applyMiddleware(cardMiddleware),
        window.__REDUX_DEVTOOLS_EXTENSION__
            ? window.__REDUX_DEVTOOLS_EXTENSION__
            : noop => noop
    )
); 