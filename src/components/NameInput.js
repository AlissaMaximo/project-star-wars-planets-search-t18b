import React, { useContext } from 'react';
import context from '../context/MyContext';

function NameInput() {
  const { filterByName: { name }, setFilterByName } = useContext(context);

  const handleInputChange = ({ target: { value } }) => {
    setFilterByName({ name: value });
  };

  return (
    <input
      value={ name }
      type="text"
      data-testid="name-filter"
      onChange={ handleInputChange }
    />
  );
}

export default NameInput;
