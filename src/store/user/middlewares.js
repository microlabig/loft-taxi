import { SERVER_URL } from '../../api/consts';
import {
    fetchUserSuccess, fetchUserFailure, fetchUserLogin, fetchUserRegister,
    fetchCardRequest, fetchCardSuccess, fetchCardFailure, fetchCardGetInfo, fetchCardSaveInfoToLS,
    fetchRouteRequest, fetchRouteSuccess, fetchRouteFailure,
    fetchAddressListRequest, fetchAddressListSuccess, fetchAddressListFailure
} from './actions';

export const userMiddleware = store => next => action => {
    const dataPayload = action.payload;

    switch (action.type) {
        case fetchUserRegister.toString():
            fetch(SERVER_URL + '/register', { method: 'POST', headers: { 'content-Type': 'application/json' }, body: JSON.stringify(dataPayload) })
                .then(response => response.json())
                .then(data => {
                    data.success
                        ? store.dispatch(fetchUserSuccess(data))
                        : Promise.reject(data);
                })
                .catch(error => store.dispatch(fetchUserFailure(error)));
            break;

        case fetchUserLogin.toString():
            fetch(SERVER_URL + '/auth', { method: 'POST', headers: { 'content-Type': 'application/json' }, body: JSON.stringify(dataPayload) })
                .then(response => response.json())
                .then(data => {
                    data.success
                        ? store.dispatch(fetchUserSuccess(data))
                        : Promise.reject(data);
                })
                .catch(error => store.dispatch(fetchUserFailure(error)));
            break;

        case fetchCardRequest.toString():
            fetch(SERVER_URL + '/card', { method: 'POST', headers: { 'content-Type': 'application/json' }, body: JSON.stringify(dataPayload) })
                .then(response => response.json())
                .then(data => {
                    data.success
                        ? store.dispatch(fetchCardSuccess(dataPayload))
                        : Promise.reject(data);
                })
                .catch(error => store.dispatch(fetchCardFailure(error)));
            break;

        case fetchCardGetInfo.toString():
            fetch(SERVER_URL + `/card?token=${store.getState().user.token}`, { method: 'GET' })
                .then(response => response.json())
                .then(data => {
                    store.dispatch(fetchCardSaveInfoToLS(data));
                })
                .catch(error => store.dispatch(fetchCardFailure(error)));
            break;

        case fetchRouteRequest.toString():
            fetch(SERVER_URL + `/route?address1=${dataPayload.address1}&${dataPayload.address2}`, { method: 'GET' })
                .then(response => response.json())
                .then(data => {
                    store.dispatch(fetchRouteSuccess(data));
                })
                .catch(error => store.dispatch(fetchRouteFailure(error)));
            break;

        case fetchAddressListRequest.toString():
            fetch(SERVER_URL + '/addressList', { method: 'GET' })
                .then(response => response.json())
                .then(data => {
                    store.dispatch(fetchAddressListSuccess(data));
                })
                .catch(error => store.dispatch(fetchAddressListFailure(error)));
            break;

        default:
            break;
    }

    next(action);
}
