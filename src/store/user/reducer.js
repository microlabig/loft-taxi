import * as actions from './actions';

const STORAGE_NAME = 'loft-taxi/user';
const cashedStore = JSON.parse(localStorage.getItem(STORAGE_NAME));

const initialState = {
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

let loadedState = { ...initialState };

if (cashedStore && cashedStore.token) {
    loadedState = { ...cashedStore };
}

const userReducer = (state = loadedState, action) => {
    const { payload } = action;
    let newState = {};

    switch (action.type) {
        // USER_SUCCESS
        case actions.fetchUserSuccess.toString():
            newState = { ...state, authed: true, token: payload.token };
            localStorage.setItem(STORAGE_NAME, JSON.stringify(newState));

            return newState;

        // USER_FAILURE
        case actions.fetchUserFailure.toString():
            newState = { ...state, authed: false, error: payload.error };

            return newState;

        // USER_LOGOUT
        case actions.fetchUserLogout.toString():
            localStorage.removeItem(STORAGE_NAME);

            return { ...initialState };

        default:
            return state;
    }
};

export { initialState };
export default userReducer;
