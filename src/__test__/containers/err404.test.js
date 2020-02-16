import React from 'react';
import { MemoryRouter } from "react-router-dom";
import { mount } from "enzyme";

import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';

import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import { Provider } from 'react-redux'
import { createStore } from 'redux';
import { rootReducer } from "../../store";

import App from '../../App';
import Err404 from '../../containers/err404';

// Сделаем мок-компонент Map
jest.mock('mapbox-gl/dist/mapbox-gl', () => ({
    Map: () => ({}),
}));

describe('компонент Err404', () => {
    describe('инициализация', () => {
        let wrapper = null;

        // подготавливаем DOM-элемент, куда будем рендерить
        beforeEach(() => { // ..Each - выполняется перед каждой ф-ией it
            wrapper = mount(
                <MemoryRouter>
                    <Err404 />
                </MemoryRouter>
            );
        });

        // подчищаем после завершения
        afterEach(() => { // ..Each - выполняется перед каждой ф-ией it
            wrapper = null;
        });

        it('монтирование компонента', () => {
            expect(wrapper.find(Err404)).toHaveLength(1);
        });

        it('есть необходимая текстовая информация', () => {
            expect(wrapper.find('h1').text()).toEqual("Error 404");
            expect(wrapper.find('button')).toHaveLength(1);
        });
    });

    describe('интерактив', () => {
        window.URL.createObjectURL = jest.fn(); // Since window.URL.createObjectURL is not (yet) available in jest-dom, you need to provide a mock implementation for it.

        it('клик по кнопке и возврат на главную страницу', () => {
            const initStore = createStore(rootReducer);
            const history = createMemoryHistory();

            const { getByTestId } = render(
                <Router history={history}>
                    <Provider store={initStore}>
                    <App />
                    </Provider>
                </Router>
            );

            history.push('/some-route');
            
            fireEvent.click(getByTestId(/errorButton/i));
            
            expect(history.location.pathname).toEqual('/');

        })
    });
});