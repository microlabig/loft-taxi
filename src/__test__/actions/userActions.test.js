import * as actions from '../../containers/login/store/actions';
import * as consts from '../../containers/login/store/consts';

describe('user actions', () => {
    describe('sync', () => {
        it('fetchUserLogout', () => {
            expect(actions.fetchUserLogout()).toEqual({
                type: consts.USER_LOGOUT
            });
        });
        it('fetchUserLoading', () => {
            expect(actions.fetchUserLoading()).toEqual({
                type: consts.USER_LOADING
            });
        });
        it('fetchUserSuccess', () => {
            expect(actions.fetchUserSuccess()).toEqual({
                type: consts.USER_SUCCESS
            });
        });
        it('fetchUserFailure', () => {
            expect(actions.fetchUserFailure()).toEqual({
                type: consts.USER_FAILURE
            });
        });
        it('fetchUserClearError', () => {
            expect(actions.fetchUserClearError()).toEqual({
                type: consts.USER_CLEAR_ERROR
            });
        });
    });
    describe('async', () => {
        it('fetchUserLogin', () => {
            expect(actions.fetchUserLogin()).toEqual({
                type: consts.USER_LOGIN
            });
        });
        it('fetchUserRegister', () => {
            expect(actions.fetchUserRegister()).toEqual({
                type: consts.USER_REGISTER
            });
        });
    });
});