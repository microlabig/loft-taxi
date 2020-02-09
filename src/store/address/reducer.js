import * as actions from './actions';

const initialState = {
    routesList: [],
    addressList: [],
    isLoadingAddresses: false,
    isLoadingRoutes: false,
    error: null
};

const addressReducer = (state = initialState, action) => {
    const { payload } = action;

    switch (action.type) {
        // ROUTE_LOADING
        case actions.fetchRouteLoading.toString():
            return { ...state, isLoadingRoutes: true};

        // ROUTE_SUCCESS
        case actions.fetchRouteSuccess.toString():
            return { ...state, isLoadingRoutes: false, routesList: [...payload] };

        // ROUTE_FAILURE
        case actions.fetchRouteFailure.toString():
            return { ...state, isLoadingRoutes: false, error: payload };

        // ADDRESS_LIST_LOADING
        case actions.fetchAddressLoading.toString():
            return { ...state, isLoadingAddresses: true};

        // ADDRESS_LIST_SUCCESS
        case actions.fetchAddressListSuccess.toString():
            return { ...state, isLoadingAddresses: false, addressList: [...payload.addresses] };

        // ADDRESS_LIST_FAILURE
        case actions.fetchAddressListFailure.toString():
            return { ...state, isLoadingAddresses: false, error: payload.error };

        // ADDRESS_RESET 
        case actions.fetchAddressClearError.toString():
            return {...initialState, error: null};

        // ADDRESS_RESET 
        case actions.fetchAddressReset.toString():
            return {...initialState};

        default:
            return state;
    }
};

export { initialState };
export default addressReducer;
