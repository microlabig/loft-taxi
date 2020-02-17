import React from 'react';
import { MemoryRouter } from "react-router-dom";
import { mount } from "enzyme";
import { act } from "react-dom/test-utils";

import { Provider } from 'react-redux'
import { createStore } from 'redux';
import { rootReducer } from "../../core/store";

import RegisterPage from '../../containers/register';

describe('компонент RegisterPage', () => {
    let initStore = null;
    let wrapper = null;

    // подготавливаем DOM-элемент, куда будем рендерить
    beforeEach(() => { // ..Each - выполняется перед каждой ф-ией it
        initStore = createStore(rootReducer);
        wrapper = mount(
            <MemoryRouter>
                <Provider store={initStore}>
                    <RegisterPage />
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

    describe('инициализация', () => {
        it('монтирование компонента', () => {
            expect(wrapper.find(RegisterPage)).toHaveLength(1);
        });

        it('есть необходимая текстовая информация', () => {
            expect(wrapper.find('h1').text()).toEqual("Loft Taxi");
            expect(wrapper.find('h2').text()).toEqual("Регистрация");
        });

        it('есть ссылка для перехода на регистрацию пользователя', () => {
            expect(wrapper.find('a').text()).toEqual("Войти");
        });

        it('есть поля ввода e-mail, password, name, surname', () => {
            expect(wrapper.find('input')).toHaveLength(4);
        });

        it('есть кнопка регистрации', () => {
            expect(wrapper.find('button')).toHaveLength(1);
        });
    });

    describe('проверка состояния элементов компонента', () => {
        let values = null;
        // подготавливаем DOM-элемент, куда будем рендерить
        beforeEach(() => { // ..Each - выполняется перед каждой ф-ией it
            values = {
                email: 'name@domain.com', 
                name: 'Name',
                surname: 'Surname',
                password: 'password123'
            }
        });

        // подчищаем после завершения
        afterEach(() => { // ..Each - выполняется перед каждой ф-ией it
            values = null;
        });

        it('создание снапшота', () => {
            expect(wrapper).toMatchSnapshot();
        });

        it('при монтировании компонента кнопка неактивна', () => {
            expect(wrapper.find('button').prop('disabled')).toBeTruthy();
        });

        it('при вводе данных в разные поля ввода кнопка неактивна', async () => {
            const emailInput = wrapper.find('[data-testid="input-email"]');
            const nameInput = wrapper.find('[data-testid="input-name"]');
            const surnameInput = wrapper.find('[data-testid="input-surname"]');
            const passwordInput = wrapper.find('[data-testid="input-password"]');
            const button = wrapper.find('button');

            await act(async () => {
                await emailInput.simulate('change', {
                    target: {
                        name: 'email',
                        value: values.email
                    }
                });
            });

            expect(button.prop('disabled')).toBeTruthy();

            await act(async () => {
                await emailInput.simulate('change', {
                    target: {
                        name: 'email',
                        value: ''
                    }
                });
                await nameInput.simulate('change', {
                    target: {
                        name: 'name',
                        value: values.name
                    }
                });
            });

            expect(button.prop('disabled')).toBeTruthy();

            await act(async () => {
                await nameInput.simulate('change', {
                    target: {
                        name: 'name',
                        value: ''
                    }
                });
                await surnameInput.simulate('change', {
                    target: {
                        name: 'surname',
                        value: values.surname
                    }
                });
            });

            expect(button.prop('disabled')).toBeTruthy();

            await act(async () => {
                await surnameInput.simulate('change', {
                    target: {
                        name: 'surname',
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
            const nameInput = wrapper.find('[data-testid="input-name"]');
            const surnameInput = wrapper.find('[data-testid="input-surname"]');
            const passwordInput = wrapper.find('[data-testid="input-password"]');

            await act(async () => {
                await emailInput.simulate('change', {
                    target: {
                        name: 'email',
                        value: values.email
                    }
                });
                await nameInput.simulate('change', {
                    target: {
                        name: 'name',
                        value: values.name
                    }
                });
                await surnameInput.simulate('change', {
                    target: {
                        name: 'surname',
                        value: values.surname
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
    })
});