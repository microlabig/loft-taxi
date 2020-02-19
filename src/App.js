import React from 'react';
import ErrorTooltip from './shared/ErrorTooltip';
import './App.scss';

import RouterComponent from './router';

// --------------
// root-компонент
// --------------
function App() {
  return (
    <div className="App">
      <ErrorTooltip>
        <RouterComponent />
      </ErrorTooltip>
    </div>
  );
}

export default App;
