import React from 'react';
import { MemoryRouter } from "react-router-dom";

import { mount } from "enzyme";
import { act } from "react-dom/test-utils";

import { Provider } from 'react-redux'
import { createStore } from 'redux';
import { rootReducer } from "../../core/store";

import ProfilePage from '../../containers/profile';

describe('компонент ProfilePage', () => {
    let initStore = null;
    let wrapper = null;

    // подготавливаем DOM-элемент, куда будем рендерить
    beforeEach(() => { // ..Each - выполняется перед каждой ф-ией it
        initStore = createStore(rootReducer);
        wrapper = mount(
            <MemoryRouter>
                <Provider store={initStore}>
                    <ProfilePage />
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
            expect(wrapper.find(ProfilePage)).toHaveLength(1);
        });

        it('есть хедер, форма и необходимая текстовая информация', () => {
            expect(wrapper.find('Header')).toHaveLength(1);
            expect(wrapper.find('FormPayment')).toHaveLength(1);
            expect(wrapper.find('h2').text()).toEqual("Профиль");
            expect(wrapper.find('p').at(0).text()).toEqual("Способ оплаты");
        });

        it('есть необходимые поля ввода данных карты и кнопка сохранения', () => {
            expect(wrapper.find('input')).toHaveLength(4);
            expect(wrapper.find('button[data-testid="button-save"]')).toHaveLength(1);
        });
    });

    describe('проверка состояния элементов компонента', () => {
        let values = null;

        // подготавливаем DOM-элемент, куда будем рендерить
        beforeEach(() => { // ..Each - выполняется перед каждой ф-ией it
            values = {
                cardNumber: '1231 2312 3122 3423',
                expiryDate: '01/25',
                cardName: 'NAME SURNAME',
                cvc: '123'
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
            expect(wrapper.find('button[data-testid="button-save"]').prop('disabled')).toBeTruthy();
        });

        it('при вводе данных в разные поля ввода кнопка неактивна', async () => {
            const cardNumberInput = wrapper.find('[data-testid="input-cardNumber"]');
            const expiryDateInput = wrapper.find('[data-testid="input-expiryDate"]');
            const cardNameInput = wrapper.find('[data-testid="input-cardName"]');
            const cvcInput = wrapper.find('[data-testid="input-cvc"]');
            const button = wrapper.find('button[data-testid="button-save"]');

            await act(async () => {
                await cardNumberInput.simulate('change', {
                    target: {
                        name: 'cardNumber',
                        value: values.cardNumber
                    }
                });
            });

            expect(button.prop('disabled')).toBeTruthy();

            await act(async () => {
                await cardNumberInput.simulate('change', {
                    target: {
                        name: 'cardNumber',
                        value: ''
                    }
                });
                await expiryDateInput.simulate('change', {
                    target: {
                        name: 'expiryDate',
                        value: values.expiryDate
                    }
                });
            });

            expect(button.prop('disabled')).toBeTruthy();

            await act(async () => {
                await expiryDateInput.simulate('change', {
                    target: {
                        name: 'expiryDate',
                        value: ''
                    }
                });
                await cardNameInput.simulate('change', {
                    target: {
                        name: 'cardName',
                        value: values.cardName
                    }
                });
            });

            expect(button.prop('disabled')).toBeTruthy();

            await act(async () => {
                await cardNameInput.simulate('change', {
                    target: {
                        name: 'cardName',
                        value: ''
                    }
                });
                await cvcInput.simulate('change', {
                    target: {
                        name: 'cvc',
                        value: values.cvc
                    }
                });
            });

            expect(button.prop('disabled')).toBeTruthy();
        });
/*
        it('при вводе валидных данных во все поля ввода кнопка активна', async () => {
                const cardNumberInput = wrapper.find('[data-testid="input-cardNumber"]');
                const expiryDateInput = wrapper.find('[data-testid="input-expiryDate"]');
                const cardNameInput = wrapper.find('[data-testid="input-cardName"]');
                const cvcInput = wrapper.find('[data-testid="input-cvc"]');
                const button = wrapper.find('button[data-testid="button-save"]');
            
                await act(async () => {
                    await cardNumberInput.simulate('change', {
                        target: {
                            name: 'cardNumber',
                            value: '1234567812345678'//values.cardNumber
                        }
                    });
                    await expiryDateInput.simulate('change', {
                        target: {
                            name: 'expiryDate',
                            value: '02/22'//values.expiryDate
                        }
                    });
                    await cardNameInput.simulate('change', {
                        target: {
                            name: 'cardName',
                            value: 'NAME1 NAME2'//values.cardName
                        }
                    });
                    await cvcInput.simulate('change', {
                        target: {
                            name: 'cvc',
                            value: '123'//values.cvc
                        }
                    });
                });
                new Promise(resolve => {
                    setTimeout(() => {
                        resolve();
                    }, 0)
                })
                wrapper.update();
            
                expect(button.prop('disabled')).toBeFalsy();
                
        });
*/
    });
});
