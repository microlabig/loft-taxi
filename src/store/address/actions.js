import { createAction } from 'redux-actions';
import * as consts from './consts';

// Route
export const fetchRouteRequest = createAction(consts.ROUTE_REQUEST);
export const fetchRouteSuccess = createAction(consts.ROUTE_SUCCESS);
export const fetchRouteFailure = createAction(consts.ROUTE_FAILURE);

// AddressList
export const fetchAddressListRequest = createAction(consts.ADDRESS_LIST_REQUEST);
export const fetchAddressListSuccess = createAction(consts.ADDRESS_LIST_SUCCESS);
export const fetchAddressListFailure = createAction(consts.ADDRESS_LIST_FAILURE);

export const fetchAddressReset = createAction(consts.ADDRESS_RESET);