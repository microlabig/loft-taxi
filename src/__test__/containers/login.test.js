import React from 'react';
import { MemoryRouter } from "react-router-dom";
import { mount } from "enzyme";
import { act } from "react-dom/test-utils";

import { Provider } from 'react-redux'
import { createStore } from 'redux';
import { rootReducer } from "../../core/store";

import LoginPage from '../../pages/Login';

describe('компонент LoginPage', () => {


    describe('инициализация', () => {
        let initStore = null;
        let wrapper = null;

        // подготавливаем DOM-элемент, куда будем рендерить
        beforeEach(() => { // ..Each - выполняется перед каждой ф-ией it
            initStore = createStore(rootReducer);
            wrapper = mount(
                <MemoryRouter>
                    <Provider store={initStore}>
                        <LoginPage />
                    </Provider>
                </MemoryRouter>
            );
        });

        // подчищаем после завершения
        afterEach(() => { // ..Each - выполняется перед каждой ф-ией it
            wrapper.unmount();
            initStore = null;
            wrapper = null;
        });

        it('монтирование компонента', () => {
            expect(wrapper.find(LoginPage)).toHaveLength(1);
        });

        it('есть необходимая текстовая информация', () => {
            expect(wrapper.find('h1').text()).toEqual("Loft Taxi");
            expect(wrapper.find('h2').text()).toEqual("Войти");
        });

        it('есть ссылка для перехода на регистрацию пользователя', () => {
            expect(wrapper.find('a').text()).toEqual("Зарегистрируйтесь");
        });

        it('есть поля ввода e-mail и password', () => {
            expect(wrapper.find('input')).toHaveLength(2);
        });

        it('есть кнопка входа', () => {
            expect(wrapper.find('button')).toHaveLength(1);
        });
    });

    describe('проверка состояния элементов компонента', () => {
        let initStore = null;
        let wrapper = null;
        let values = null;
        // подготавливаем DOM-элемент, куда будем рендерить
        beforeEach(() => { // ..Each - выполняется перед каждой ф-ией it
            initStore = createStore(rootReducer);
            wrapper = mount(
                <MemoryRouter>
                    <Provider store={initStore}>
                        <LoginPage />
                    </Provider>
                </MemoryRouter>
            );
            values = {
                email: 'name@domain.com', password: 'password123'
            }
        });

        // подчищаем после завершения
        afterEach(() => { // ..Each - выполняется перед каждой ф-ией it
            wrapper.unmount();
            initStore = null;
            wrapper = null;
            values = null;
        });

        it('создание снапшота', () => {
            expect(wrapper).toMatchSnapshot();
        });

        it('при монтировании компонента кнопка активна', () => {
            expect(wrapper.find('button').prop('disabled')).toBeFalsy();
        });

        it('при вводе данных в разные поля ввода кнопка неактивна', async () => {
            const emailInput = wrapper.find('[data-testid="input-email"]');
            const passwordInput = wrapper.find('[data-testid="input-password"]');
            const button = wrapper.find('[data-testid="button-submit"]').at(0);

            await act(async () => {
                await emailInput.simulate('change', {
                    target: {
                        name: 'email',
                        value: values.email
                    }
                });
            });

            console.log(button.props());        

            expect(button.prop('disabled')).toBeTruthy();

            await act(async () => {
                await emailInput.simulate('change', {
                    target: {
                        name: 'email',
                        value: ''
                    }
                });
                await passwordInput.simulate('change', {
                    target: {
                        name: 'password',
                        value: values.password
                    }
                });
            });

            expect(button.prop('disabled')).toBeTruthy();
        });

        it('при вводе валидных данных во все поля ввода кнопка активна', async () => {
            const emailInput = wrapper.find('[data-testid="input-email"]');
            const passwordInput = wrapper.find('[data-testid="input-password"]');

            await act(async () => {
                await emailInput.simulate('change', {
                    target: {
                        name: 'email',
                        value: values.email
                    }
                });
                await passwordInput.simulate('change', {
                    target: {
                        name: 'password',
                        value: values.password
                    }
                });
            });

            expect(wrapper.find('button').prop('disabled')).toBeFalsy();
        });

        /* it('форма сабмитится', async () => {
            //const instance = wrapper.instance();
            const form = wrapper.find('form');
            const spy = jest.spyOn(form.props(), 'onSubmit');

            wrapper.update();
            wrapper.instance().forceUpdate();

            const emailInput = wrapper.find('[data-testid="input-email"]');
            const passwordInput = wrapper.find('[data-testid="input-password"]');
            const button = wrapper.find('button');
            
            await act(async () => {
                await emailInput.simulate('change', {
                    target: {
                        name: 'email',
                        value: values.email
                    }
                });
                await passwordInput.simulate('change', {
                    target: {
                        name: 'password',
                        value: values.password
                    }
                });
                await button.simulate('click',{ target: { name: 'submit' } });
                //await form.prop('onSubmit')();
            });

            expect(spy).toHaveBeenCalled();
            spy.mockClear();
        }); */
    })
});