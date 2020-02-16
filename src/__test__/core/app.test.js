import React from 'react';

import { shallow } from "enzyme";

import App from '../../App';
import RouterComponent from '../../router';

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

    it('наличие роутера', () => {
        const wrapper = shallow(<App />);
        // expect(wrapper.contains(<AuthProvider/>)).toEqual(true);
        expect(wrapper.find(RouterComponent)).toHaveLength(1);
    });
});