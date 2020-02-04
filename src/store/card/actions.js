import { createAction } from 'redux-actions';
import * as consts from './consts';

// Card
export const fetchCardRequest = createAction(consts.CARD_REQUEST);
export const fetchCardSuccess = createAction(consts.CARD_SUCCESS);
export const fetchCardFailure = createAction(consts.CARD_FAILURE);
export const fetchCardGetInfo = createAction(consts.CARD_GET_INFO);
export const fetchCardSaveInfoToLS = createAction(consts.CARD_SAVE_INFO_TO_LS);
export const fetchCardIsLoadedReset = createAction(consts.CARD_ISLOADED_RESET);
export const fetchCardReset = createAction(consts.CARD_RESET);
