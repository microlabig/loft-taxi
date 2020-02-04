import { createAction } from 'redux-actions';
import * as consts from './consts';

// User
export const fetchUserRequest = createAction(consts.USER_REQUEST);
export const fetchUserSuccess = createAction(consts.USER_SUCCESS);
export const fetchUserFailure = createAction(consts.USER_FAILURE);

export const fetchUserLogin = createAction(consts.USER_LOGIN);
export const fetchUserLogout = createAction (consts.USER_LOGOUT);
export const fetchUserRegister = createAction(consts.USER_REGISTER);

// // Card
// export const fetchCardRequest = createAction(consts.CARD_REQUEST);
// export const fetchCardSuccess = createAction(consts.CARD_SUCCESS);
// export const fetchCardFailure = createAction(consts.CARD_FAILURE);
// export const fetchCardGetInfo = createAction(consts.CARD_GET_INFO);
// export const fetchCardSaveInfoToLS = createAction(consts.CARD_SAVE_INFO_TO_LS);

// Route
export const fetchRouteRequest = createAction(consts.ROUTE_REQUEST);
export const fetchRouteSuccess = createAction(consts.ROUTE_SUCCESS);
export const fetchRouteFailure = createAction(consts.ROUTE_FAILURE);

// AddressList
export const fetchAddressListRequest = createAction(consts.ADDRESS_LIST_REQUEST);
export const fetchAddressListSuccess = createAction(consts.ADDRESS_LIST_SUCCESS);
export const fetchAddressListFailure = createAction(consts.ADDRESS_LIST_FAILURE);