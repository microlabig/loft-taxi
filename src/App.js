import React from 'react';
import './App.scss';

import RouterComponent from './router';

// --------------
// root-компонент
// --------------
function App() {
  //стейт root-компонента
  //const [page, setPage] = useState('login');

  return (
    <div className="App">
      <RouterComponent />
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
