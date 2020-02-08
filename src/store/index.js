import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { all } from 'redux-saga/effects';

import userReducer, { userSaga } from './user';
import cardReducer, { cardSaga } from './card';
import addressReducer, { addressSaga } from './address';

export const rootReducer = combineReducers({
    userReducer,
    cardReducer,
    addressReducer
});

const sagaMiddleware = createSagaMiddleware();

function* rootSaga() {
    yield all([
        userSaga(),
        cardSaga(),
        addressSaga()
    ]);
}

export default createStore(
    rootReducer,
    compose(
        applyMiddleware(sagaMiddleware),
        window.__REDUX_DEVTOOLS_EXTENSION__
            ? window.__REDUX_DEVTOOLS_EXTENSION__()
            : noop => noop
    )
); 

sagaMiddleware.run(rootSaga);
