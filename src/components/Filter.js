import React, { useContext, useState } from 'react';
import context from '../context/MyContext';

function Filter() {
  const { filterByNumericValues, setFilterByNumericValues } = useContext(context);
  const [filters, setFilters] = useState({});

  const handleFormChange = (event) => {
    setFilters({
      [event.name]: event.value
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    setFilters(INITIAL_NUMERIC_VALUES);
  };

  return (
    <form onSubmit={ handleSubmit }>
      <label htmlFor="select-aspect">
        Coluna
        <select
          data-testid="column-filter"
          id="select-aspect"
          name="column"
          value={ }
          onChange={ handleFormChange }
        >
          <option value="population">population</option>
          <option value="orbital_period">orbital_period</option>
          <option value="diameter">diameter</option>
          <option value="rotation_period">rotation_period</option>
          <option value="surface_water">surface_water</option>
        </select>
      </label>
      <label htmlFor="select-range">
        Operador
        <select
          data-testid="comparison-filter"
          id="select-range"
          name="comparison"
          value={ }
          onChange={ handleFormChange }
        >
          <option value="maior que">maior que</option>
          <option value="menor que">menor que</option>
          <option value="igual a">igual a</option>
        </select>
      </label>
      <label htmlFor="input-value">
        Valor
        <input
          data-testid="value-filter"
          type="number"
          id="input-value"
          name="value"
          value={ }
          onChange={ handleFormChange }
        />
      </label>
      <button
        data-testid="button-filter"
        type="submit"
      >
        Filtrar
      </button>
    </form>
  );
}

export default Filter;
