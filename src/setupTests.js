// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import React from 'react'
import { Router } from 'react-router-dom'
import { render } from '@testing-library/react'
import { createMemoryHistory } from 'history'

import '@testing-library/jest-dom/extend-expect';

// конфигурация enzyme
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
configure({adapter: new Adapter()});

// конфигурация для роутера
global.renderWithRouter = (
  ui,
  {
    route = '/',
    history = createMemoryHistory({ initialEntries: [route] }),
  } = {}
) => {
  return {
    ...render(<Router history={history}>{ui}</Router>),
    history,
  }
}
export default renderWithRouter;