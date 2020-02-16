import React from "react";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";
import { act } from "react-dom/test-utils";
import { render as TestingRender, fireEvent } from "@testing-library/react";
import { render, unmountComponentAtNode } from "react-dom";
import { Provider } from 'react-redux'
import { createStore } from 'redux';
import { rootReducer } from "../../store";
import App from "../../App";

// Сделаем мок-компонент Map
jest.mock('mapbox-gl/dist/mapbox-gl', () => ({
  Map: () => ({}),
}));

//--------------------------------------------------------------
// проверка перехода по страницам
//--------------------------------------------------------------
describe('проверка перехода по страницам', () => {
  window.URL.createObjectURL = jest.fn();

  let container = null;
  let initStore = null;
  let history = null;

  // подготавливаем DOM-элемент, куда будем рендерить
  beforeEach(() => { // ..Each - выполняется перед каждой ф-ией it
    initStore = createStore(rootReducer);
    history = createMemoryHistory();
    container = document.createElement('div');
    document.body.appendChild(container);
  });

  // подчищаем после завершения
  afterEach(() => { // ..Each - выполняется перед каждой ф-ией it
    unmountComponentAtNode(container);
    container.remove();
    container = null;
    initStore = null;
    history = null;
    window.URL.createObjectURL.mockReset();
  });

  it('переход на страницу с регистрацией', () => {
    act(() => {
      render(<Router history={history}>
        <Provider store={initStore}>
          <App />
        </Provider>
      </Router>, container);
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
      render(<Router history={history}>
        <Provider store={initStore}>
          <App />
        </Provider>
      </Router>, container);
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
});


/* describe('тесты роутинга компонентов', () => {
  window.URL.createObjectURL = jest.fn(); // Since window.URL.createObjectURL is not (yet) available in jest-dom, you need to provide a mock implementation for it.

  it("авторизация пользователя", () => {
    const history = createMemoryHistory();

    const { container, getByTestId } = TestingRender(
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
    
        // fireEvent.click(getByTestId(/button-submit/i));
        // // act(() => {
        // //   getByTestId(/button-submit/i).dispatchEvent(new MouseEvent("click", { bubbles: true }));
        // // }); 
        // //getByTestId(/button-submit/i).dispatchEvent(new MouseEvent("click", { bubbles: true }));
        
        // expect(container.innerHTML).toMatch("Authenticate here");
    
  });
}); */