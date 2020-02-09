import { takeLatest, call, put, fork } from 'redux-saga/effects';
import * as consts from './consts';
import * as actions from './actions';
import * as api from '../../utils/api/loft';

function* fetchRequestWorker(action) {
    const { payload } = action;

    yield put(actions.fetchCardLoading());
    try {
        const response = yield call(api.cardRequest, payload);

        if (response.success) {
            yield put(actions.fetchCardSuccess(response));
        } else {
            throw new Error(response.error);
        }
    } catch (error) {
        yield put(actions.fetchCardFailure(error.message));
    }
}

function* fetchGetInfoWorker(action) {
    const { payload } = action;
    
    yield put(actions.fetchCardLoading());
    try {
        const response = yield call(api.cardGetInfo, payload);

        if (response.hasOwnProperty('id')) {
            yield put(actions.fetchCardSaveInfoToLS(response));
        } else {
            throw new Error(response.error);
        }
    } catch (error) {
        yield put(actions.fetchCardFailure(error.message));
    }
}

function* requestWatcher() {
    yield takeLatest(consts.CARD_REQUEST, fetchRequestWorker);
}

function* getInfoWatcher() {
    yield takeLatest(consts.CARD_GET_INFO, fetchGetInfoWorker);
}

export function* cardSaga() {
    yield fork(requestWatcher, null);
    yield fork(getInfoWatcher, null);
}