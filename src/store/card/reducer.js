import * as actions from './actions';

const STORAGE_NAME = 'loft-taxi/card';
const cashedStore = JSON.parse(localStorage.getItem(STORAGE_NAME));

const initialState = {
    card: {
        cardNumber: null,
        expiryDate: null,
        cardName: null,
        cvc: null,
    },
    isLoading: false,
    isUpdate: false,
    isInfoLoaded: false,
    error: null
};

let loadedState = {...initialState};

if (cashedStore) {
    loadedState = { ...cashedStore };
}

const cardReducer = (state = loadedState, action) => {
    const { payload } = action;
    let newState = {};

    switch (action.type) {
        // CARD_LOADING
        case actions.fetchCardLoading.toString():
            return { ...state, isLoading: true};

        // CARD_SUCCESS
        case actions.fetchCardSuccess.toString():
            newState = { ...state, isLoading: false, isUpdate: !state.isUpdate, card: { ...payload } };
            
            if (newState.card.hasOwnProperty('token')) {
                delete newState.card.token;
            }
            localStorage.setItem(STORAGE_NAME, JSON.stringify(newState));

            return newState;
        
        // CARD_FAILURE
        case actions.fetchCardFailure.toString():
            return { ...state, isLoading: false, isUpdate: false, isInfoLoaded: false, error: payload.error };

        // CARD_SAVE_INFO_TO_LS
        case actions.fetchCardSaveInfoToLS.toString():
            newState = { ...state, isLoading: false, card: { ...payload }, isInfoLoaded: true };
            if (newState.card.hasOwnProperty('id')) {
                delete newState.card.id;
            }
            localStorage.setItem(STORAGE_NAME, JSON.stringify(newState));

            return newState;

        // CARD_ISLOADED_RESET
        case actions.fetchCardIsLoadedReset.toString():
            newState = { ...state, isInfoLoaded: false };
            localStorage.setItem(STORAGE_NAME, JSON.stringify(newState));
            
            return newState;

        // CARD_RESET
        case actions.fetchCardReset.toString():
            localStorage.removeItem(STORAGE_NAME);

            return {...initialState};

        default:
            return state;
    }
};

export { initialState };
export default cardReducer;
