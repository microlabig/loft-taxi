import { SERVER_URL } from '../../utils/consts';
import * as actions from './actions';

export const userMiddleware = store => next => action => {
    const { payload } = action;

    switch (action.type) {
        // USER_REGISTER
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

        // USER_LOGIN
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

        default:
            break;
    }

    next(action);
}
