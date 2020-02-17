import * as actions from '../../store/card/actions';
import * as consts from '../../store/card/consts';

describe('card actions', () => {
    describe('sync', () => {
        it('fetchCardLoading', () => {
            expect(actions.fetchCardLoading()).toEqual({
                type: consts.CARD_LOADING
            });
        });

        it('fetchCardSuccess', () => {
            expect(actions.fetchCardSuccess()).toEqual({
                type: consts.CARD_SUCCESS
            });
        });
        it('fetchCardFailure', () => {
            expect(actions.fetchCardFailure()).toEqual({
                type: consts.CARD_FAILURE
            });
        });

        it('fetchCardSaveInfoToLS', () => {
            expect(actions.fetchCardSaveInfoToLS()).toEqual({
                type: consts.CARD_SAVE_INFO_TO_LS
            });
        });
        it('fetchCardIsLoadedReset', () => {
            expect(actions.fetchCardIsLoadedReset()).toEqual({
                type: consts.CARD_ISLOADED_RESET
            });
        });
        it('fetchCardReset', () => {
            expect(actions.fetchCardReset()).toEqual({
                type: consts.CARD_RESET
            });
        });
        it('fetchCardClearError', () => {
            expect(actions.fetchCardClearError()).toEqual({
                type: consts.CARD_CLEAR_ERROR
            });
        });
    });
    describe('async', () => {
        it('fetchCardRequest', () => {
            expect(actions.fetchCardRequest()).toEqual({
                type: consts.CARD_REQUEST
            });
        });
        it('fetchCardGetInfo', () => {
            expect(actions.fetchCardGetInfo()).toEqual({
                type: consts.CARD_GET_INFO
            });
        });
    });
});