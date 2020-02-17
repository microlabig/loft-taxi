import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { all } from 'redux-saga/effects';

import userReducer, { userSaga } from '../containers/login/store';
import cardReducer, { cardSaga } from '../containers/profile/store';
import addressReducer, { addressSaga } from '../containers/map/store';

// делаем общий срез редьюсеров
export const rootReducer = combineReducers({
    userReducer,
    cardReducer,
    addressReducer
});

// создаем сагу 
const sagaMiddleware = createSagaMiddleware();

// создаем root-сагу для запуска отдельных саг параллельно
function* rootSaga() {
    yield all([
        userSaga(),
        cardSaga(),
        addressSaga()
    ]);
}

// создаем стор
export default createStore(
    rootReducer,
    // объединяем функции справа-налево
    compose(
        // добавляем созданную выше сагу
        applyMiddleware(sagaMiddleware),
        // подключаем расширение Redux DevTools для дебага redux
        window.__REDUX_DEVTOOLS_EXTENSION__
            ? window.__REDUX_DEVTOOLS_EXTENSION__()
            : noop => noop // для тестов
    )
); 

// запускаем root-сагу
sagaMiddleware.run(rootSaga);
