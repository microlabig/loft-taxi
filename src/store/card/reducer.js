import * as actions from './actions';

const STORAGE_NAME = 'loft-taxi/card';
const cashedStore = JSON.parse(localStorage.getItem(STORAGE_NAME));

let initStore = {
    card: {
        cardNumber: null,
        expiryDate: null,
        cardName: null,
        cvc: null,
        isUpdate: false
    },
    error: null
};

if (cashedStore) {
    initStore = { ...cashedStore };
}

export default (state = initStore, action) => {
    const { payload } = action;
    let newState = {};

    switch (action.type) {
        
        case actions.fetchCardSuccess.toString():
            newState = { ...state, card: { ...action.payload, isUpdate: !state.card.isUpdate } };
            if (newState.card.hasOwnProperty('token')) {
                delete newState.card.token;
            }
            localStorage.setItem(STORAGE_NAME, JSON.stringify(newState));

            return newState;

        case actions.fetchCardFailure.toString():
            return { ...state, card: {}, error: payload.error };

        case actions.fetchCardSaveInfoToLS.toString():
            newState = { ...state, card: { ...payload } };
            if (newState.card.hasOwnProperty('id')) {
                delete newState.card.id;
            }
            localStorage.setItem(STORAGE_NAME, JSON.stringify(newState));

            return newState;

        default:
            return state;
    }
};
