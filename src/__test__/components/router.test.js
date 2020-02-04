import React from "react";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";
import { render, fireEvent } from "@testing-library/react";
import { Provider } from 'react-redux'
import { createStore } from 'redux';
import App from "../../App";
import { rootReducer } from "../../store";

const initStore = createStore(rootReducer);

// Сделаем мок-компонент Map
jest.mock('mapbox-gl/dist/mapbox-gl', () => ({
  Map: () => ({}),
}));

describe('тесты роутинга компонентов', () => {
  window.URL.createObjectURL = jest.fn(); // Since window.URL.createObjectURL is not (yet) available in jest-dom, you need to provide a mock implementation for it.

  it("авторизация пользователя", () => {
    const history = createMemoryHistory();

    const { container, getByTestId } = render(
      <Router history={history}>
        <Provider store={initStore}>
          <App />
        </Provider>
      </Router>
    );

    expect(container.innerHTML).toMatch("Войти");

    const values = {
      email: 'igor-rock@list.ru', password: '290388'
    }

    const emailInput = getByTestId(/input-email/i);
    const passwordInput = getByTestId(/input-password/i);
    
    //fireEvent.change(getByTestId(/input-email/i,{value: values.emailValue}));
    emailInput.setAttribute('value', values.email);
    passwordInput.setAttribute('value', values.password);

    expect(emailInput.getAttribute('value')).toMatch(values.email);
    expect(passwordInput.getAttribute('value')).toMatch(values.password);
/*
    fireEvent.click(getByTestId(/button-submit/i));
    // act(() => {
    //   getByTestId(/button-submit/i).dispatchEvent(new MouseEvent("click", { bubbles: true }));
    // }); 
    //getByTestId(/button-submit/i).dispatchEvent(new MouseEvent("click", { bubbles: true }));
    
    expect(container.innerHTML).toMatch("Authenticate here");
*/
  });
});

