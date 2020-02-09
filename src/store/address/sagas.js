import { takeLatest, call, put, fork } from 'redux-saga/effects';
import * as consts from './consts';
import * as actions from './actions';
import * as api from '../../utils/api/loft';

function* fetchRoutesWorker(action) {
    const { payload } = action;

    yield put(actions.fetchRouteLoading());
    try {
        const response = yield call(api.routeRequest, payload);
        yield put(actions.fetchRouteSuccess(response));
    } catch (error) {
        yield put(actions.fetchRouteFailure(error));
    }
}

function* fetchAdresesWorker(action) {
    yield put(actions.fetchAddressLoading());
    try {
        const response = yield call(api.addressListRequest);
        yield put(actions.fetchAddressListSuccess(response));
    } catch (error) {
        yield put(actions.fetchAddressListFailure(error));
    }
}

function* routesWatcher() {
    yield takeLatest(consts.ROUTE_REQUEST, fetchRoutesWorker);
}

function* addressListWatcher() {
    yield takeLatest(consts.ADDRESS_LIST_REQUEST, fetchAdresesWorker);
}

export function* addressSaga() {
    yield fork(routesWatcher, null);
    yield fork(addressListWatcher, null);
}