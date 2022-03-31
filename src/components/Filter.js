import React, { useContext, useState } from 'react';
import context from '../context/MyContext';

function Filter() {
  const columnOptions = ['population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water'];

  const { filterByNumericValues, setFilterByNumericValues } = useContext(context);
  const INITIAL_NUMERIC_VALUES = {
    column: 'population',
    comparison: 'maior que',
    value: 0,
  };
  const [filters, setFilters] = useState(INITIAL_NUMERIC_VALUES);
  const [options, setOptions] = useState(columnOptions);

  const handleFormChange = ({ target }) => {
    setFilters({ ...filters, [target.name]: target.value });
  };

  const handleButton = () => {
    setFilterByNumericValues([...filterByNumericValues, filters]);
    setOptions(options.filter((option) => option !== filters.column));
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
          onChange={ handleFormChange }
        >
          {options.map((option) => (
            <option key={ option } value={ option }>{option}</option>
          ))}
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
