import { createAction } from 'redux-actions';

const USER_REQUEST = 'loft-taxi/user/REQUEST';
const USER_SUCCESS = 'loft-taxi/user/SUCCESS';
const USER_FAILURE = 'loft-taxi/user/FAILURE';

const USER_LOGIN = 'loft-taxi/user/LOGIN';
const USER_LOGOUT = 'loft-taxi/user/LOGOUT';
const USER_REGISTER = 'loft-taxi/user/REGISTER';

const CARD_REQUEST = 'loft-taxi/card/REQUEST';
const CARD_SUCCESS = 'loft-taxi/card/SUCCESS';
const CARD_FAILURE = 'loft-taxi/card/FAILURE';
const CARD_GET_INFO = 'loft-taxi/card/CARD_GET_INFO';
const CARD_SAVE_INFO_TO_LS = 'loft-taxi/card/CARD_SAVE_INFO_TO_LS';

const ROUTE_REQUEST = 'loft-taxi/route/REQUEST';
const ROUTE_SUCCESS = 'loft-taxi/route/SUCCESS';
const ROUTE_FAILURE = 'loft-taxi/route/FAILURE';

const ADDRESS_LIST_REQUEST = 'loft-taxi/addressList/REQUEST';
const ADDRESS_LIST_SUCCESS = 'loft-taxi/addressList/SUCCESS';
const ADDRESS_LIST_FAILURE = 'loft-taxi/addressList/FAILURE';

export const fetchUserRequest = createAction(USER_REQUEST);
export const fetchUserSuccess = createAction(USER_SUCCESS);
export const fetchUserFailure = createAction(USER_FAILURE);

export const fetchUserLogin = createAction(USER_LOGIN);
export const fetchUserLogout = createAction (USER_LOGOUT);
export const fetchUserRegister = createAction(USER_REGISTER);

export const fetchCardRequest = createAction(CARD_REQUEST);
export const fetchCardSuccess = createAction(CARD_SUCCESS);
export const fetchCardFailure = createAction(CARD_FAILURE);
export const fetchCardGetInfo = createAction(CARD_GET_INFO);
export const fetchCardSaveInfoToLS = createAction(CARD_SAVE_INFO_TO_LS);

export const fetchRouteRequest = createAction(ROUTE_REQUEST);
export const fetchRouteSuccess = createAction(ROUTE_SUCCESS);
export const fetchRouteFailure = createAction(ROUTE_FAILURE);

export const fetchAddressListRequest = createAction(ADDRESS_LIST_REQUEST);
export const fetchAddressListSuccess = createAction(ADDRESS_LIST_SUCCESS);
export const fetchAddressListFailure = createAction(ADDRESS_LIST_FAILURE);