import React from 'react';
import './App.css';
import Provider from './context/myProvider';
import NameInput from './components/NameInput';
import Table from './components/Table';

function App() {
  return (
    <Provider>
      <NameInput />
      <Table />
    </Provider>
  );
}

export default App;
