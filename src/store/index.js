import { createStore, combineReducers, compose, applyMiddleware } from 'redux';

import user, { userMiddleware } from './user';

export default createStore(
    combineReducers({
        user,
    }),
    compose(
        applyMiddleware(userMiddleware),
        window.__REDUX_DEVTOOLS_EXTENSION__
            ? window.__REDUX_DEVTOOLS_EXTENSION__
            : noop => noop
    )
); 