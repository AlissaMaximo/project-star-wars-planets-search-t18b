import React from 'react';
import './App.css';
import Provider from './context/myProvider';
import NameInput from './components/NameInput';
import Table from './components/Table';
import Filter from './components/Filter';

function App() {
  return (
    <Provider>
      <NameInput />
      <Filter />
      <Table />
    </Provider>
  );
}

export default App;
