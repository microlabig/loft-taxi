import React, { useState } from 'react';
import './App.scss';

import Header from './components/header';

import ProfilePage from './pages/profile';
import MapPage from './pages/map';
import LoginPage from './pages/login';
import RegisterFormPage from './pages/register';

import CheckOnline from './components/checkOnline';

import { AuthProvider, AuthContext } from './contexts/login-context';

// список страниц
const PAGES = {
  map: {
    caption: 'Карта',
    component: () => <MapPage />,
    auth: true
  },
  profile: {
    caption: 'Профиль',
    component: () => <ProfilePage />,
    auth: true
  },
  login: {
    caption: 'Логин',
    component: (setPage) => <LoginPage setPage={setPage} />,
    auth: false
  },
  register: {
    caption: 'Регистрация',
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

  return (
    <div className="App">
      <AuthProvider>
        {PAGES[page].component(setPage)}
        <AuthContext.Consumer>
          {({ isLoggedIn }) => (
            <>
              <CheckOnline setPage={setPage} isLoggedIn={isLoggedIn} />
              <Header
                pages={PAGES}
                setPage={setPage}
                isLoggedIn={isLoggedIn}
              />
            </>
          )}
        </AuthContext.Consumer>
      </AuthProvider>
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
