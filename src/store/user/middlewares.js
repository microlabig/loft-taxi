import { SERVER_URL } from '../../utils/consts';
import * as actions from './actions';

export const userMiddleware = store => next => action => {
    const { payload } = action;

    switch (action.type) {
        // User
        case actions.fetchUserRegister.toString():
            fetch(SERVER_URL + '/register', { method: 'POST', headers: { 'content-Type': 'application/json' }, body: JSON.stringify(payload) })
                .then(response => response.json())
                .then(data => {
                    data.success
                        ? store.dispatch(actions.fetchUserSuccess(data))
                        : Promise.reject(data);
                })
                .catch(error => store.dispatch(actions.fetchUserFailure(error)));
            break;

        case actions.fetchUserLogin.toString():
            fetch(SERVER_URL + '/auth', { method: 'POST', headers: { 'content-Type': 'application/json' }, body: JSON.stringify(payload) })
                .then(response => response.json())
                .then(data => {
                    data.success
                        ? store.dispatch(actions.fetchUserSuccess(data))
                        : Promise.reject(data);
                })
                .catch(error => store.dispatch(actions.fetchUserFailure(error)));
            break;

        // // Card
        // case actions.fetchCardRequest.toString():
        //     fetch(SERVER_URL + '/card', { method: 'POST', headers: { 'content-Type': 'application/json' }, body: JSON.stringify(payload) })
        //         .then(response => response.json())
        //         .then(data => {
        //             data.success
        //                 ? store.dispatch(actions.fetchCardSuccess(payload))
        //                 : Promise.reject(data);
        //         })
        //         .catch(error => store.dispatch(actions.fetchCardFailure(error)));
        //     break;

        // case actions.fetchCardGetInfo.toString():
        //     fetch(SERVER_URL + `/card?token=${store.getState().user.token}`, { method: 'GET' })
        //         .then(response => response.json())
        //         .then(data => {
        //             store.dispatch(actions.fetchCardSaveInfoToLS(data));
        //         })
        //         .catch(error => store.dispatch(actions.fetchCardFailure(error)));
        //     break;
        
        // Route
        case actions.fetchRouteRequest.toString():
            fetch(SERVER_URL + `/route?address1=${payload.address1}&${payload.address2}`, { method: 'GET' })
                .then(response => response.json())
                .then(data => {
                    store.dispatch(actions.fetchRouteSuccess(data));
                })
                .catch(error => store.dispatch(actions.fetchRouteFailure(error)));
            break;

        // AddressList
        case actions.fetchAddressListRequest.toString():
            fetch(SERVER_URL + '/addressList', { method: 'GET' })
                .then(response => response.json())
                .then(data => {
                    store.dispatch(actions.fetchAddressListSuccess(data));
                })
                .catch(error => store.dispatch(actions.fetchAddressListFailure(error)));
            break;

        default:
            break;
    }

    next(action);
}
