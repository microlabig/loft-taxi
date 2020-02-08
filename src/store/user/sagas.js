import { takeLatest, call, put, fork } from 'redux-saga/effects';
import * as consts from './consts';
import * as actions from './actions';
import * as api from '../../utils/api/loft';

function* fetchUserWorker(action) {
    const { type, payload } = action;
    let apiFunc = null;

    switch (type) {
        case consts.USER_LOGIN:
            apiFunc = api.userLogin;
            break;
        case consts.USER_REGISTER:
            apiFunc = api.userRegister;
            break;
        default:
            return;
    }
    yield put(actions.fetchUserLoading());
    try {
        const response = yield call(apiFunc, payload);
        
        if (response.success) {
            yield put(actions.fetchUserSuccess(response));
        } else {
            throw new Error(response.error);
        }
    } catch (error) {
        yield put(actions.fetchUserFailure(error));
    }
}

function* loginWatcher() {
    yield takeLatest(consts.USER_LOGIN, fetchUserWorker);
}

function* registerWatcher() {
    yield takeLatest(consts.USER_REGISTER, fetchUserWorker);
}

export function* userSaga() {
    yield fork(loginWatcher, null);
    yield fork(registerWatcher, null);
}