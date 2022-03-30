import React, { useContext } from 'react';
import context from '../context/MyContext';

function NameInput() {
  handleInputChange = ({ target }) => {
    
  };

  return (
    <input type="text" data-testid="name-filter" onChange={ this.handleInputChange() } />
  );
}

export default NameInput;
