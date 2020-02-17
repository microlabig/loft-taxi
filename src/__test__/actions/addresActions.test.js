import * as actions from '../../containers/map/store/actions';
import * as consts from '../../containers/map/store/consts';

describe('user actions', () => {
    describe('route actions', () => {
        describe('sync', () => {
            it('fetchRouteLoading', () => {
                expect(actions.fetchRouteLoading()).toEqual({
                    type: consts.ROUTE_LOADING
                });
            });

            it('fetchRouteSuccess', () => {
                expect(actions.fetchRouteSuccess()).toEqual({
                    type: consts.ROUTE_SUCCESS
                });
            });
            it('fetchRouteFailure', () => {
                expect(actions.fetchRouteFailure()).toEqual({
                    type: consts.ROUTE_FAILURE
                });
            });
        });
        describe('async', () => {
            it('fetchRouteRequest', () => {
                expect(actions.fetchRouteRequest()).toEqual({
                    type: consts.ROUTE_REQUEST
                });
            });
        });
    });

    describe('address actions', () => {
        describe('sync', () => {
            it('fetchAddressLoading', () => {
                expect(actions.fetchAddressLoading()).toEqual({
                    type: consts.ADDRESS_LOADING
                });
            });

            it('fetchAddressListSuccess', () => {
                expect(actions.fetchAddressListSuccess()).toEqual({
                    type: consts.ADDRESS_LIST_SUCCESS
                });
            });
            it('fetchAddressListFailure', () => {
                expect(actions.fetchAddressListFailure()).toEqual({
                    type: consts.ADDRESS_LIST_FAILURE
                });
            });
            it('fetchAddressClearError', () => {
                expect(actions.fetchAddressClearError()).toEqual({
                    type: consts.ADDRESS_CLEAR_ERROR
                });
            });
            it('fetchAddressReset', () => {
                expect(actions.fetchAddressReset()).toEqual({
                    type: consts.ADDRESS_RESET
                });
            });
        });
        describe('async', () => {
            it('fetchAddressListRequest', () => {
                expect(actions.fetchAddressListRequest()).toEqual({
                    type: consts.ADDRESS_LIST_REQUEST
                });
            });
        });
    });
});