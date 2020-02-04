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
    // USER_SUCCESS
    // --------------------------------------------
    it(`удачная загрузка данных [${consts.USER_SUCCESS}]`, () => {
        const action = {
            type: actions.fetchUserSuccess.toString(),
            payload: { token: 'token' }
        }

        expect(userReducer(initialTestState, action)).toEqual({
            ...initialTestState,
            authed: true,
            token: action.payload.token
        });
    });

    // --------------------------------------------
    // USER_FAILURE
    // --------------------------------------------
    it(`неудачная загрузка данных [${consts.USER_FAILURE}]`, () => {
        const action = {
            type: actions.fetchUserFailure.toString(),
            payload: { error: 'error' }
        }

        expect(userReducer(initialTestState, action)).toEqual({
            ...initialTestState,
            authed: false,
            error: action.payload.error
        });
    });

    // --------------------------------------------
    // USER_LOGOUT
    // --------------------------------------------
    it(`выход пользователя [${consts.USER_LOGOUT}]`, () => {
        const action = {
            type: actions.fetchUserLogout.toString()
        }

        const state = {
            ...initialTestState,
            user: {
                name: 'Иван',
                surName: 'Иванов',
                email: 'ivanov@email.com',
                password: 'password'
            },
            authed: true,
            token: 'token'
        }

        expect(userReducer(state, action)).toEqual(initialTestState);
    });
});