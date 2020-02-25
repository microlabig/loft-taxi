import React from "react";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";
import { act } from "react-dom/test-utils";
import { render as testingRender, fireEvent, act as testingLAct } from "@testing-library/react";
import { render, unmountComponentAtNode } from "react-dom";
import { Provider } from 'react-redux'
import { createStore } from 'redux';
import { fetchUserLogin } from '../../pages/Login/store/';
import { rootReducer } from "../../core/store";

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
    act(() => {
      render(<Router history={history}>
        <Provider store={initStore}>
          <App />
        </Provider>
      </Router>, container);
    });
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

  it('находимся на странице логина', () => {
    const heading = container.querySelector("[data-testid=descriptionTitle]");
    expect(heading.textContent).toBe("Войти");
  });

  it('переход на страницу с регистрацией', () => {
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


describe('продолжение "проверка перехода по страницам"', () => {
  window.URL.createObjectURL = jest.fn(); // Since window.URL.createObjectURL is not (yet) available in jest-dom, you need to provide a mock implementation for it.

  it("авторизация пользователя и переход на страницу с картой", async () => {
    const values = {
      email: 'mail@domain.com', password: 'password123'
    };
    const history = createMemoryHistory();
    const initStore = createStore(rootReducer);
    const mockAction = fetchUserLogin(values);

    initStore.dispatch = jest.fn(); // для дальнейшей проверки  

    const { container, getByTestId } = testingRender(
      <Router history={history}>
        <Provider store={initStore}>
          <App />
        </Provider>
      </Router>
    );

    // проверка, что находимся на root-странице
    expect(history.location.pathname).toEqual("/");

    const emailInput = getByTestId(/input-email/i);
    const passwordInput = getByTestId(/input-password/i);
    const button = getByTestId(/button-submit/i);

    // на главной странице есть строка "Войти"
    expect(container.innerHTML).toMatch("Войти");

    // вводим данные в поля ввода
    await testingLAct(async () => {
      await fireEvent.change(emailInput, { target: { value: values.email } });
      await fireEvent.change(passwordInput, { target: { value: values.password } });
    });

    // проверяем, что все данные ввелись нормально и кнопка активна
    expect(emailInput.getAttribute('value')).toMatch(values.email);
    expect(passwordInput.getAttribute('value')).toMatch(values.password);
    expect(button.disabled).toBeFalsy();

    // кликаем по кнопке
    await testingLAct(async () => {
      await fireEvent.click(button);
    });

    // проверяем выполнение dispath с параметрами mockAction
    expect(initStore.dispatch).toHaveBeenNthCalledWith(1, mockAction);
    initStore.dispatch.mockClear();
  });
});