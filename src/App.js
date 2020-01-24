import React, { useState } from 'react';
// import './App.css';

import Header from './components/header';

import ProfilePage from './pages/profile';
import MapPage from './pages/map';
import LoginPage from './pages/login';
import RegisterFormPage from './pages/register';

import CheckOnline from './components/checkOnline';

import { AppProvider, AppContext } from './contexts/login-context';

// список страниц
const PAGES = {
  profile: {
    component: () => <ProfilePage />,
    auth: true
  },
  map: {
    component: () => <MapPage />,
    auth: true
  },
  login: {
    component: (setPage) => <LoginPage setPage={setPage} />,
    auth: false
  },
  submit: {
    component: (setPage) => <RegisterFormPage setPage={setPage} />,
    auth: false
  }
};

// --------------
// root-компонент
// --------------
function App() {
  //стейт root-компонента
  const [page, setPage] = useState('login');

  // ф-ия для изменения поля page стейта
  const checkPage = (data) => setPage(data);

  return (
    <div className="App">
      <AppProvider>
        <AppContext.Consumer>
          {({ isLoggedIn }) => (
            <CheckOnline setPage={setPage} isLoggedIn={isLoggedIn}>
              <Header
                pages={PAGES}
                checkPage={checkPage}
              />
              {PAGES[page].component(setPage)}
            </CheckOnline>
          )}
        </AppContext.Consumer>
      </AppProvider>
    </div>
  );
}

export default App;

/*
import InputLazy from './components/input-lazy';

// root-компонент
function App() {

  const onChangeBrowser = (e) => {
    console.log(e.target.value);
  }

  return (
      <InputLazy
        value={page}
        onChange={onChangeBrowser}
        nativeProps={{
          type: "text",
          placeholder: "input",
          className: "class1"
        }}
      />
  );
}
*/
