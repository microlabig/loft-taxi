import React from 'react';

import { render as renderTL, fireEvent } from '@testing-library/react';
import { shallow, mount } from "enzyme";

import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

import App from '../App';
import LoginPage from '../pages/login';
import { AuthProvider } from '../contexts/login-context';

// Сделаем мок-компонент Map
jest.mock('mapbox-gl/dist/mapbox-gl', () => ({
    Map: () => ({}),
}));

// Enzyme
//--------------------------------------------------------------
// правильный первоначальный запуск приложения
//--------------------------------------------------------------
describe('правильный первоначальный запуск приложения', () => {
    window.URL.createObjectURL = jest.fn(); // Since window.URL.createObjectURL is not (yet) available in jest-dom, you need to provide a mock implementation for it.

    it('наличие контекста AuthProvider', () => {
        const wrapper = shallow(<App />);
        // expect(wrapper.contains(<AuthProvider/>)).toEqual(true);
        expect(wrapper.find(AuthProvider)).toHaveLength(1);
    });

    it('наличие страницы LoginPage', () => {
        const wrapper = shallow(<App />);
        expect(wrapper.find(LoginPage)).toHaveLength(1);
    });
});

// react-dom/test-utils
//--------------------------------------------------------------
// проверка элементов на странице
//--------------------------------------------------------------
describe('проверка элементов на странице', () => {
    window.URL.createObjectURL = jest.fn();

    let container = null;

    // подготавливаем DOM-элемент, куда будем рендерить
    beforeEach(() => { // ..Each - выполняется перед каждой ф-ией it
        container = document.createElement('div');
        document.body.appendChild(container);
    });

    // подчищаем после завершения
    afterEach(() => { // ..Each - выполняется перед каждой ф-ией it
        unmountComponentAtNode(container);
        container.remove();
        container = null;
        window.URL.createObjectURL.mockReset();
    });

    it('наличие логотипа на странице', () => {
        act(() => {
            render(<LoginPage />, container);
        });

        expect(container.querySelector(".login__logo").textContent).toBe("Loft Taxi");
    });

    it('наличие ссылки для перехода на форму регистрации', () => {
        act(() => {
            render(<LoginPage />, container);
        });
        const link = container.querySelector("[data-testid=linkToregisterForm]");
        
        expect(link.textContent).toBe("Зарегистрируйтесь");
    });

    it('наличие кнопки "Войти"', () => {
        act(() => {
            render(<LoginPage />, container);
        });
        const button = container.querySelector(".button-submit");
        
        expect(button.textContent).toBe("Войти");
    });
});

//--------------------------------------------------------------
// проверка перехода по страницам
//--------------------------------------------------------------
describe('проверка перехода по страницам', () => {
    window.URL.createObjectURL = jest.fn();

    let container = null;

    // подготавливаем DOM-элемент, куда будем рендерить
    beforeEach(() => { // ..Each - выполняется перед каждой ф-ией it
        container = document.createElement('div');
        document.body.appendChild(container);
    });

    // подчищаем после завершения
    afterEach(() => { // ..Each - выполняется перед каждой ф-ией it
        unmountComponentAtNode(container);
        container.remove();
        container = null;
        window.URL.createObjectURL.mockReset();
    });

    it('переход на страницу с регистрацией', () => {
        act(() => {
            render(<App />, container);
        });
        // находим ссылку для перехода на регистрационную форму
        const link = container.querySelector("[data-testid=linkToregisterForm]");
        
        // кликаем по ссылке
        act(() => {
            link.dispatchEvent(new MouseEvent("click", { bubbles: true }));
        }); 

        const heading = container.querySelector("[data-testid=descriptionTitle]");
        expect(heading.textContent).toBe("Регистрация");
    });

    it('обратный переход на страницу с вводом логина', () => {
        act(() => {
            render(<App />, container);
        });

        // находим ссылку для перехода на регистрационную форму
        const link = container.querySelector("[data-testid=linkToregisterForm]");
        // кликаем по ссылке
        act(() => {
            link.dispatchEvent(new MouseEvent("click", { bubbles: true }));
        }); 

        // находим ссылку для перехода обратно на форму ввода логина
        const linkReverse = container.querySelector("[data-testid=linkToregisterForm]");
        // кликаем по ссылке
        act(() => {
            linkReverse.dispatchEvent(new MouseEvent("click", { bubbles: true }));
        });

        const heading = container.querySelector("[data-testid=descriptionTitle]");
        expect(heading.textContent).toBe("Войти");
    });

    

    it('переход на страницу с картой', () => {
        // Создадим мок-компонент Map

        /* 
        // ---------------------
        // react-dom/test-utils
        // ---------------------
        const Map = jest.mock("mapbox-gl/dist/mapbox-gl", () => {
            return function MapPage(props) {
                return (
                    <div class="map mapboxgl-map">
                        Map
                    </div>
                );
            };
        }); 
        
        act(() => {
            render(<App />, container);
        });
        
        // находим кнопку для перехода на регистрационную форму
        const button = container.querySelector(".button-submit");
        // кликаем по ссылке
        act(() => {
            button.dispatchEvent(new MouseEvent("click", { bubbles: true }));
        }); 

        const MapRendered = container.querySelector(".map");
        expect(MapRendered.hasClass('map')).toBe(true); 
        */

        // ----------------------
        // @testing-library/react
        // ----------------------
        /* 
        const MockMap = () => (
            <Map>
                Map
            </Map>
        );
        const {getByTestId, getByText, queryByTestId} = renderTL(<App />);
        fireEvent.click(getByTestId('button-submit')); 
        */

        /*
        // ------------------------
        // Enzyme 
        // ------------------------
        const wrapper = mount(<App />);
        wrapper.find('.form__button-submit').at(0).simulate('click'); 
        */

    });

});