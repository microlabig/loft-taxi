import cardReducer, { initialState } from '../../containers/profile/store/reducer';
import * as consts from '../../containers/profile/store/consts';
import * as actions from '../../containers/profile/store/actions';

// --------------------------------------------
// cardReducer
// --------------------------------------------
describe('тесты редьюсера cardReducer', () => {
    let initialTestState = {};

    // инициализируем начальный стейт
    beforeEach(() => { // ..Each - выполняется перед каждой ф-ией it
        initialTestState = { ...initialState };
    });

    // подчищаем после завершения
    afterEach(() => { // ..Each - выполняется перед каждой ф-ией it
        initialTestState = null;
    });

    // --------------------------------------------
    // CARD_LOADING
    // --------------------------------------------
    it(`началась загрузка данных [${consts.CARD_LOADING}]`, () => {
        const action = {
            type: actions.fetchCardLoading.toString()
        };

        expect(cardReducer(initialTestState, action)).toEqual({
            ...initialTestState,
            isLoading: true
        });
    });

    // --------------------------------------------
    // CARD_SUCCESS
    // --------------------------------------------
    it(`удачная загрузка данных [${consts.CARD_SUCCESS}]`, () => {
        const state = {
            ...initialTestState, isLoading: true
        };
        const action = {
            type: actions.fetchCardSuccess.toString(),
            payload: {
                cardNumber: '1234 5678 9012 3456',
                expiryDate: '01/21',
                cardName: 'IVAN IVANOV',
                cvc: '123'
            }
        };

        expect(cardReducer(state, action)).toEqual({
            ...initialTestState,
            isLoading: false,
            isUpdate: true,
            card: { ...action.payload }
        });
    });

    // --------------------------------------------
    // CARD_FAILURE
    // --------------------------------------------
    it(`неудачная загрузка данных [${consts.CARD_FAILURE}]`, () => {
        const state = {
            ...initialTestState, isLoading: true
        };
        const action = {
            type: actions.fetchCardFailure.toString(),
            payload: { error: 'error' }
        };

        expect(cardReducer(state, action)).toEqual({
            ...initialTestState,
            isLoading: false,
            isUpdate: false,
            isInfoLoaded: false,
            error: action.payload
        });
    });

    // --------------------------------------------
    // CARD_SAVE_INFO_TO_LS
    // --------------------------------------------
    it(`сохранение данных карты в LS [${consts.CARD_SAVE_INFO_TO_LS}]`, () => {
        const state = {
            ...initialTestState, isLoading: true
        };
        const action = {
            type: actions.fetchCardSaveInfoToLS.toString(),
            payload: {
                cardNumber: '1234 5678 9012 3456',
                expiryDate: '01/21',
                cardName: 'IVAN IVANOV',
                cvc: '123'
            }
        };

        expect(cardReducer(state, action)).toEqual({
            ...initialTestState,
            isLoading: false,
            card: { ...action.payload },
            isInfoLoaded: true
        });
    });

    // --------------------------------------------
    // CARD_ISLOADED_RESET
    // --------------------------------------------
    it(`сброс влага загрузки данных карты [${consts.CARD_ISLOADED_RESET}]`, () => {
        const action = {
            type: actions.fetchCardIsLoadedReset.toString()
        };

        expect(cardReducer(initialTestState, action)).toEqual({
            ...initialTestState,
            isInfoLoaded: false
        });
    });

    // --------------------------------------------
    // CARD_CLEAR_ERROR
    // --------------------------------------------
    it(`сброс ошибки [${consts.CARD_CLEAR_ERROR}]`, () => {
        const state = {
            ...initialTestState, 
            isLoading: 'true loading',
            error: 'ERROR'
        };
        const action = {
            type: actions.fetchCardClearError.toString()
        };

        expect(cardReducer(state, action)).toEqual({
            ...state,
            error: null
        });
    });

    // --------------------------------------------
    // CARD_RESET
    // --------------------------------------------
    it(`выход пользователя и удаление данных карты [${consts.CARD_RESET}]`, () => {
        const state = {
            ...initialTestState,
            card: {
                cardNumber: '1234 5678 9012 3456',
                expiryDate: '01/21',
                cardName: 'IVAN IVANOV',
                cvc: '123'
            },
            isLoading: 'true loading',
            isUpdate: true,
            isInfoLoaded: true
        };
        const action = {
            type: actions.fetchCardReset.toString()
        };

        expect(cardReducer(state, action)).toEqual(initialTestState);
    });
});