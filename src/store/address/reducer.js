import * as actions from './actions';

const STORAGE_NAME = 'loft-taxi/address';
const cashedStore = JSON.parse(localStorage.getItem(STORAGE_NAME));

const initialState = {
    routesList: [],
    addressList: [],
    isLoadingAddresses: false,
    isLoadingRoutes: false,
    error: null
};

let loadedState = {...initialState};

if (cashedStore) {
    loadedState = { ...cashedStore };
}

const addressReducer = (state = loadedState, action) => {
    const { payload } = action;
    let newState = {};

    switch (action.type) {
        // ADDRESS_LOADING
        case actions.fetchAddressLoading.toString():
            return { ...state, isLoadingAddresses: true};
        
        // ROUTE_LOADING
        case actions.fetchRouteLoading.toString():
            return { ...state, isLoadingRoutes: true};

        // ROUTE_SUCCESS
        case actions.fetchRouteSuccess.toString():
            newState = { ...state, isLoadingRoutes: false, routesList: [...payload] };
            localStorage.setItem(STORAGE_NAME, JSON.stringify(newState));

            return newState;

        // ROUTE_FAILURE
        case actions.fetchRouteFailure.toString():
            newState = { ...state, isLoadingRoutes: false, error: payload.error };

            return newState;

        // ADDRESS_LIST_SUCCESS
        case actions.fetchAddressListSuccess.toString():
            newState = { ...state, isLoadingAddresses: false, addressList: [...payload.addresses] };
            localStorage.setItem(STORAGE_NAME, JSON.stringify(newState));

            return newState;

        // ADDRESS_LIST_FAILURE
        case actions.fetchAddressListFailure.toString():
            newState = { ...state, isLoadingAddresses: false, error: payload.error };

            return newState;

        // ADDRESS_RESET
        case actions.fetchAddressReset.toString():
            localStorage.removeItem(STORAGE_NAME);

            return {...initialState};

        default:
            return state;
    }
};

export { initialState };
export default addressReducer;
