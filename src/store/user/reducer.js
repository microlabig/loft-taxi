import * as actions from './actions';

const STORAGE_NAME = 'loft-taxi/user';
const cashedStore = JSON.parse(localStorage.getItem(STORAGE_NAME));

let initStore = {
    user: {
        name: null,
        surName: null,
        email: null,
        password: null
    },
    authed: false,
    token: null,
    error: null
};

if (cashedStore && cashedStore.token) {
    initStore = { ...cashedStore };
}

export default (state = initStore, action) => {
    const { payload } = action;
    let newState = {};

    switch (action.type) {
        case actions.fetchUserSuccess.toString():
            newState = { ...state, authed: true, token: payload.token };
            localStorage.setItem(STORAGE_NAME, JSON.stringify(newState));

            return newState;

        case actions.fetchUserFailure.toString():
            newState = { ...state, authed: false, error: payload.error };

            return newState;

        case actions.fetchUserLogout.toString():
            localStorage.removeItem(STORAGE_NAME);

            return { user: {}, authed: false, token: null, error: null };

        default:
            return state;
    }
};
