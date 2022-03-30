import React, { useContext } from 'react';
import context from '../context/MyContext';

function NameInput() {
  const handleInputChange = ({ target: { value } }) => {
    setFilterByName({ name: value });
  };

  return (
    <section>
      <form>
        <select
          data-testid="column-filter"
          id="select-aspect"
          name="aspect"
        >
          <option>population</option>
          <option>orbital_period</option>
          <option>diameter</option>
          <option>rotation_period</option>
          <option>surface_water</option>
        </select>
        <select
          data-testid="comparison-filter"
          id="select-range"
          name="range"
        >
          <option>maior que</option>
          <option>menor que</option>
          <option>igual a</option>
        </select>
        <input
          data-testid="value-filter"
          type="number"
          id="input-value"
          name="number"
        />
        <button
          data-testid="button-filter"
          type="button"
        >
          Filtrar
        </button>
      </form>
    </section>
  );
}

export default NameInput;
