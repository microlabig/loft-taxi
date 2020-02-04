import * as actions from './actions';

const STORAGE_NAME = 'loft-taxi';
const cashedStore = JSON.parse(localStorage.getItem(STORAGE_NAME));

let initStore = {
    user: {
        name: null,
        surName: null,
        email: null,
        password: null
    },
    card: {
        cardNumber: null,
        expiryDate: null,
        cardName: null,
        cvc: null,
        isUpdate: false
    },
    route: [],
    addressList: [],
    authed: false,
    token: null,
    error: null
};

if (cashedStore && cashedStore.token) {
    initStore = { ...cashedStore };
}

export default (state = initStore, action) => {
    let newState = {};

    switch (action.type) {
        // User
        case actions.fetchUserSuccess.toString():
            newState = { ...state, authed: true, token: action.payload.token };
            localStorage.setItem(STORAGE_NAME, JSON.stringify(newState));

            return newState;

        case actions.fetchUserFailure.toString():
            newState = { ...state, authed: false, error: action.payload.error };

            return newState;

        case actions.fetchUserLogout.toString():
            localStorage.removeItem(STORAGE_NAME);

            return { ...state, user: {}, card: {}, route: {}, authed: false, token: null, error: null };

        // Card
        case actions.fetchCardSuccess.toString():
            newState = { ...state, card: { ...action.payload, isUpdate: !state.card.isUpdate } };
            if (newState.card.hasOwnProperty('token')) {
                delete newState.card.token;
            }
            localStorage.setItem(STORAGE_NAME, JSON.stringify(newState));

            return newState;

        case actions.fetchCardFailure.toString():
            return { ...state, card: {}, error: action.payload.error };

        case actions.fetchCardSaveInfoToLS.toString():
            newState = { ...state, card: { ...action.payload } };
            if (newState.card.hasOwnProperty('id')) {
                delete newState.card.id;
            }
            localStorage.setItem(STORAGE_NAME, JSON.stringify(newState));

            return newState;

        // Route
        case actions.fetchRouteSuccess.toString():
            newState = { ...state, route: [...action.payload] };
            localStorage.setItem(STORAGE_NAME, JSON.stringify(newState));

            return newState;

        case actions.fetchRouteFailure.toString():
            newState = { ...state, error: action.payload.error };

            return newState;

        // AddressList
        case actions.fetchAddressListSuccess.toString():
            newState = { ...state, addressList: [...action.payload] };
            localStorage.setItem(STORAGE_NAME, JSON.stringify(newState));

            return newState;

        case actions.fetchAddressListFailure.toString():
            newState = { ...state, error: action.payload.error };

            return newState;

        default:
            return state;
    }
};
