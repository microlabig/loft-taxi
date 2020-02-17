import { takeLatest, call, put, fork } from 'redux-saga/effects';
import * as consts from './consts';
import * as actions from './actions';
import * as api from '../../../utils/api';

// сага обработки промежуточных результатов 
function* fetchUserWorker(action) {
    const { type, payload } = action;
    let apiFunc = null;

    // тип экшена откуда произошел диспатч - логин или регистрация
    // для настройки передачи ф-ии api
    switch (type) {
        // логин
        case consts.USER_LOGIN:
            apiFunc = api.userLogin;
            break;
        // регистрация
        case consts.USER_REGISTER:
            apiFunc = api.userRegister;
            break;
        default:
            return;
    }

    // диспатчим экшен установки флага начало загрузки инф-ии
    yield put(actions.fetchUserLoading());

    try {
        // вызываем ф-ию api и ждем когда прийдет ответ от сервера
        const response = yield call(apiFunc, payload);
        // проверяем статус ответа
        if (response.success) {
            // диспатчим экшен успешного запроса
            yield put(actions.fetchUserSuccess(response));
        } else {
            throw new Error(response.error);
        }
    } catch (error) {
        // диспатчим экшен в случае ошибки запроса
        yield put(actions.fetchUserFailure(error.message));
    }
}

// сага возврата последнего вызова fetchUserWorker в стеке запросов логина пользователя
function* loginWatcher() {
    yield takeLatest(consts.USER_LOGIN, fetchUserWorker);
}

// сага возврата последнего вызова fetchUserWorker в стеке запросов регистрации пользователя
function* registerWatcher() {
    yield takeLatest(consts.USER_REGISTER, fetchUserWorker);
}

// общая сага user data запуска неблокирующих запросов
export function* userSaga() {
    yield fork(loginWatcher, null);
    yield fork(registerWatcher, null);
}