import React, { useContext, useState } from 'react';
import context from '../context/MyContext';

function Filter() {
  const { filterByNumericValues, setFilterByNumericValues } = useContext(context);
  const INITIAL_NUMERIC_VALUES = {
    column: 'population',
    comparison: 'maior que',
    value: 0,
  };
  const [filters, setFilters] = useState(INITIAL_NUMERIC_VALUES);

  const handleFormChange = ({ target }) => {
    setFilters({ ...filters, [target.name]: target.value });
  };

  const handleButton = () => {
    console.log(filters);
    setFilterByNumericValues([...filterByNumericValues, filters]);
    // setFilters(INITIAL_NUMERIC_VALUES);
  };

  return (
    <form>
      <label htmlFor="select-aspect">
        Coluna
        <select
          data-testid="column-filter"
          id="select-aspect"
          name="column"
          value={ filters.column }
          onChange={ (event) => handleFormChange(event) }
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
          value={ filters.comparison }
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
          value={ filters.value }
          onChange={ handleFormChange }
        />
      </label>
      <button
        data-testid="button-filter"
        type="button"
        onClick={ handleButton }
      >
        Filtrar
      </button>
    </form>
  );
}

export default Filter;
