import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Context from './components/Context';

ReactDOM.render(
  <Context.Provider>
    <App />
  </Context.Provider>, document.getElementById('root'),
);
