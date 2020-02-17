import addressReducer, { initialState } from '../../containers/map/store/reducer';
import * as consts from '../../containers/map/store/consts';
import * as actions from '../../containers/map/store/actions';

// --------------------------------------------
// addressReducer
// --------------------------------------------
describe('тесты редьюсера addressReducer', () => {
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
    // ROUTE_LOADING
    // --------------------------------------------
    it(`началась загрузка данных route [${consts.ROUTE_LOADING}]`, () => {
        const action = {
            type: actions.fetchRouteLoading.toString()
        }

        expect(addressReducer(initialTestState, action)).toEqual({
            ...initialTestState,
            isLoadingRoutes: true
        });
    });

    // --------------------------------------------
    // ROUTE_SUCCESS
    // --------------------------------------------
    it(`удачная загрузка данных route [${consts.ROUTE_SUCCESS}]`, () => {
        const state = {
            ...initialTestState, isLoadingRoutes: true
        };
        const action = {
            type: actions.fetchRouteSuccess.toString(),
            payload: [1, 2, 3, 4, 5]
        };

        expect(addressReducer(state, action)).toEqual({
            ...initialTestState,
            isLoadingRoutes: false,
            routesList: [...action.payload]
        });
    });

    // --------------------------------------------
    // ROUTE_FAILURE
    // --------------------------------------------
    it(`неудачная загрузка данных route [${consts.ROUTE_FAILURE}]`, () => {
        const state = {
            ...initialTestState, isLoadingRoutes: true
        };
        const action = {
            type: actions.fetchRouteFailure.toString(),
            payload: { error: 'error' }
        };

        expect(addressReducer(state, action)).toEqual({
            ...initialTestState,
            isLoadingRoutes: false,
            error: action.payload
        });
    });

    // --------------------------------------------
    // ADDRESS_LOADING
    // --------------------------------------------
    it(`началась загрузка данных addressList [${consts.ADDRESS_LOADING}]`, () => {
        const action = {
            type: actions.fetchAddressLoading.toString()
        };

        expect(addressReducer(initialTestState, action)).toEqual({
            ...initialTestState,
            isLoadingAddresses: true
        });
    });

    // --------------------------------------------
    // ADDRESS_LIST_SUCCESS
    // --------------------------------------------
    it(`удачная загрузка данных addressList [${consts.ADDRESS_LIST_SUCCESS}]`, () => {
        const state = {
            ...initialTestState, isLoadingAddresses: true
        };
        const action = {
            type: actions.fetchAddressListSuccess.toString(),
            isLoadingAddresses: 'loaded',
            payload: { addresses: [1, 2, 3, 4, 5] }
        };

        expect(addressReducer(state, action)).toEqual({
            ...initialTestState,
            isLoadingAddresses: false,
            addressList: [...action.payload.addresses]
        });
    });

    // --------------------------------------------
    // ADDRESS_LIST_FAILURE
    // --------------------------------------------
    it(`неудачная загрузка данных addressList [${consts.ADDRESS_LIST_FAILURE}]`, () => {
        const state = {
            ...initialTestState, isLoadingAddresses: true
        };
        const action = {
            type: actions.fetchAddressListFailure.toString(),
            payload: { error: 'error' }
        }

        expect(addressReducer(state, action)).toEqual({
            ...initialTestState,
            isLoadingAddresses: false,
            error: action.payload.error
        });
    });

    // --------------------------------------------
    // CARD_CLEAR_ERROR
    // --------------------------------------------
    it(`сброс ошибки [${consts.ADDRESS_CLEAR_ERROR}]`, () => {
        const state = {
            ...initialTestState, 
            routesList: [1, 2, 3, 4],
            error: 'ERROR'
        };
        const action = {
            type: actions.fetchAddressClearError.toString()
        };

        expect(addressReducer(state, action)).toEqual({
            ...state,
            error: null
        });
    });

    // ---------------------------------------------
    // ADDRESS_RESET
    // --------------------------------------------
    it(`выход пользователя и удаление данных об адресах [${consts.ADDRESS_RESET}]`, () => {
        const action = {
            type: actions.fetchAddressReset.toString()
        }

        const state = {
            ...initialTestState,
            isLoadingRoutes: 'false',
            isLoadingAddresses: 123,
            routesList: [1, 2, 3, 4],
            addressList: [5, 6, 7, 8],
        }

        expect(addressReducer(state, action)).toEqual(initialTestState);
    });
});