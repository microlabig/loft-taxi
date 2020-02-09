import userReducer, { initialState } from '../../store/user/reducer';
import * as consts from '../../store/user/consts';
import * as actions from '../../store/user/actions';

// --------------------------------------------
// userReducer
// --------------------------------------------
describe('тесты редьюсера userReducer', () => {
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
    // USER_LOADING
    // --------------------------------------------
    it(`началась загрузка данных [${consts.USER_LOADING}]`, () => {
        const action = {
            type: actions.fetchUserLoading.toString()
        };

        expect(userReducer(initialTestState, action)).toEqual({
            ...initialTestState,
            isLoading: true
        });
    });


    // --------------------------------------------
    // USER_SUCCESS
    // --------------------------------------------
    it(`удачная загрузка данных [${consts.USER_SUCCESS}]`, () => {
        const state = {
            ...initialTestState, isLoading: true
        };
        const action = {
            type: actions.fetchUserSuccess.toString(),
            payload: { token: 'token' }
        };

        expect(userReducer(state, action)).toEqual({
            ...initialTestState,
            isLoading: false,
            authed: true,
            token: action.payload.token
        });
    });

    // --------------------------------------------
    // USER_FAILURE
    // --------------------------------------------
    it(`неудачная загрузка данных [${consts.USER_FAILURE}]`, () => {
        const state = {
            ...initialTestState, isLoading: true
        };
        const action = {
            type: actions.fetchUserFailure.toString(),
            payload: { error: 'error' }
        };

        expect(userReducer(state, action)).toEqual({
            ...initialTestState,
            isLoading: false,
            authed: false,
            error: action.payload
        });
    });

    // --------------------------------------------
    // USER_CLEAR_ERROR
    // --------------------------------------------
    it(`сброс ошибки [${consts.USER_CLEAR_ERROR}]`, () => {
        const state = {
            ...initialTestState, 
            token: 'token', 
            error: 'ERROR'
        };
        const action = {
            type: actions.fetchUserClearError.toString()
        };

        expect(userReducer(state, action)).toEqual({
            ...state,
            error: null
        });
    });

    // --------------------------------------------
    // USER_LOGOUT
    // --------------------------------------------
    it(`выход пользователя [${consts.USER_LOGOUT}]`, () => {
        const action = {
            type: actions.fetchUserLogout.toString()
        };
        const state = {
            ...initialTestState,
            user: {
                name: 'Иван',
                surName: 'Иванов',
                email: 'ivanov@email.com',
                password: 'password'
            },
            isLoading: 'help me please',
            authed: true,
            token: 'token'
        }

        expect(userReducer(state, action)).toEqual(initialTestState);
    });
});