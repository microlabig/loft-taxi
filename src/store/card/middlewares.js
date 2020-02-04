import { SERVER_URL } from '../../utils/consts';
import * as actions from './actions';

export const cardMiddleware = store => next => action => {
    const { payload } = action;

    switch (action.type) {
        // Card
        case actions.fetchCardRequest.toString():
            fetch(SERVER_URL + '/card', { method: 'POST', headers: { 'content-Type': 'application/json' }, body: JSON.stringify(payload) })
                .then(response => response.json())
                .then(data => {
                    data.success
                        ? store.dispatch(actions.fetchCardSuccess(payload))
                        : Promise.reject(data);
                })
                .catch(error => store.dispatch(actions.fetchCardFailure(error)));
            break;

        case actions.fetchCardGetInfo.toString():
            fetch(SERVER_URL + `/card?token=${store.getState().userReducer.token}`, { method: 'GET' })
                .then(response => response.json())
                .then(data => {
                    store.dispatch(actions.fetchCardSaveInfoToLS(data));
                })
                .catch(error => store.dispatch(actions.fetchCardFailure(error)));
            break;

        default:
            break;
    }

    next(action);
}
