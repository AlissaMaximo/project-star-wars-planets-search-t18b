import React, { useContext } from 'react';
import context from '../context/MyContext';

function Filter() {
  const {
    filterByNumericValues: [{ column, comparison, value }], setFilterByNumericValues,
  } = useContext(context);

  const filterPlanets = ({ target: { name, value } }) => {
  };

  return (
    <form>
      <label htmlFor="select-aspect">
        Coluna
        <select
          data-testid="column-filter"
          id="select-aspect"
          name="aspect"
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
          name="range"
        >
          <option value="biggerThan">maior que</option>
          <option value="smallerThan">menor que</option>
          <option value="sameAs">igual a</option>
        </select>
      </label>
      <label htmlFor="input-value">
        Valor
        <input
          data-testid="value-filter"
          type="number"
          id="input-value"
          name="number"
        />
      </label>
      <button
        data-testid="button-filter"
        type="button"
        onClick={ filterPlanets }
      >
        Filtrar
      </button>
    </form>
  );
}

export default Filter;
