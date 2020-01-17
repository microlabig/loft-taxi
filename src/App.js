import React, { useState } from 'react';
// import logo from './logo.svg';
// import './App.css';

import Header from './components/header';

import Profile from './pages/profile';
import Map from './pages/map';
import Login from './pages/login';
import Submit from './pages/submit';

// список страниц
const PAGES = {
  profile: () => <Profile />,
  map: () => <Map />,
  login: setPage => <Login setPage={setPage}/>,
  submit: setPage => <Submit setPage={setPage}/>
};

// root-компонент
function App() {
  //стейт root-компонента
  const [page, setPage] = useState('login'); 

  // ф-ия для изменения поля page стейта
  const checkPage = (data) => setPage(data);

  return (
    <div className="App">
      <Header pagesList={Object.keys(PAGES)} checkPage={checkPage}/>
      {PAGES[page](setPage)}
    </div>
  );
}

export default App;
