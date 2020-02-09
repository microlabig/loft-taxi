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
    isLoading: false,
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
        // USER_LOADING
        case actions.fetchUserLoading.toString():
            return { ...state, isLoading: true};
            
        // USER_SUCCESS
        case actions.fetchUserSuccess.toString():
            newState = { ...state, isLoading: false, authed: true, token: payload.token };
            
            localStorage.setItem(STORAGE_NAME, JSON.stringify(newState));

            return newState;

        // USER_FAILURE
        case actions.fetchUserFailure.toString():
            return { ...state, isLoading: false, authed: false, error: payload };
            
        // USER_CLEAR_ERROR
        case actions.fetchUserClearError.toString():
            return { ...state, error: null };
            
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
