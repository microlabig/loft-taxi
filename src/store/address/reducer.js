import * as actions from './actions';

const STORAGE_NAME = 'loft-taxi/address';
const cashedStore = JSON.parse(localStorage.getItem(STORAGE_NAME));

let initStore = {
    route: [],
    addressList: [],
    error: null
};

if (cashedStore) {
    initStore = { ...cashedStore };
}

export default (state = initStore, action) => {
    const { payload } = action;
    let newState = {};

    switch (action.type) {
        // Route
        case actions.fetchRouteSuccess.toString():
            newState = { ...state, route: [...payload] };
            localStorage.setItem(STORAGE_NAME, JSON.stringify(newState));

            return newState;

        case actions.fetchRouteFailure.toString():
            newState = { ...state, error: payload.error };

            return newState;

        // AddressList
        case actions.fetchAddressListSuccess.toString():
            newState = { ...state, addressList: [...payload.addresses] };
            localStorage.setItem(STORAGE_NAME, JSON.stringify(newState));

            return newState;

        case actions.fetchAddressListFailure.toString():
            newState = { ...state, error: payload.error };

            return newState;

        default:
            return state;
    }
};
