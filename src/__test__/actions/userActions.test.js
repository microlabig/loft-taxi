import * as actions from '../../store/user/actions';
import * as consts from '../../store/user/consts';

describe('user actions', () => {
    it('fetchUserLogin', () => {
        expect(actions.fetchUserLogin()).toEqual({
            type: consts.USER_LOGIN
        });
    });
    it('fetchUserLogout', () => {
        expect(actions.fetchUserLogout()).toEqual({
            type: consts.USER_LOGOUT
        });
    });
    it('fetchUserRegister', () => {
        expect(actions.fetchUserRegister()).toEqual({
            type: consts.USER_REGISTER
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