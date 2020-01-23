import React, { useState } from 'react';
// import logo from './logo.svg';
// import './App.css';

import Header from './components/header';

import Profile from './pages/profile';
import Map from './pages/map';
import Login from './pages/login';
import RegisterForm from './pages/register';

import { LoginContext, login, logout } from './api/login-context';
//const { Provider, Consumer } = React.createContext();

// список страниц
const PAGES = {
  profile: () => <Profile />,
  map: () => <Map />,
  login: setPage => <Login setPage={setPage} />,
  submit: setPage => <RegisterForm setPage={setPage} />
};

// --------------
// root-компонент
// --------------
function App() {
  // const context = useContext(LoginContext);
  // console.log(context);

  //стейт root-компонента
  const [page, setPage] = useState('login');
  // const [isLoggedIn, setIsLoggedIn] = useState(context.isLoggedIn);

  // ф-ия для изменения поля page стейта
  const checkPage = (data) => setPage(data);

  return (
    <LoginContext.Provider value={{ login, logout, isLoggedIn: false }}>
      <div className="App">
        <Header
          pagesList={Object.keys(PAGES)}
          checkPage={checkPage}
          loginPagesList={['profile', 'map']}
        />
        {PAGES[page](setPage)}
      </div>
    </LoginContext.Provider>
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
