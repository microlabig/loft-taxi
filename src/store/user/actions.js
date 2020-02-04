import { createAction } from 'redux-actions';
import * as consts from './consts';

// User
export const fetchUserRequest = createAction(consts.USER_REQUEST);
export const fetchUserSuccess = createAction(consts.USER_SUCCESS);
export const fetchUserFailure = createAction(consts.USER_FAILURE);

export const fetchUserLogin = createAction(consts.USER_LOGIN);
export const fetchUserLogout = createAction (consts.USER_LOGOUT);
export const fetchUserRegister = createAction(consts.USER_REGISTER);