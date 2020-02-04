import { SERVER_URL } from '../../utils/consts';
import * as actions from './actions';

export const addressMiddleware = store => next => action => {
    const { payload } = action;

    switch (action.type) {
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
