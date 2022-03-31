import React, { useContext, useEffect } from 'react';
import context from '../context/MyContext';

function Table() {
  const {
    planets,
    filterByName: { name },
    filterByNumericValues,
    finalFiltered,
    setFinalFiltered,
  } = useContext(context);

  const filteredPlanetsByName = () => planets
    .filter((planet) => planet.name.toLowerCase().includes(name.toLowerCase()));

  const filteredPlanets = () => {
    if (filterByNumericValues.length > 0) {
      filterByNumericValues.forEach((filter) => {
        const { column, comparison, value } = filter;
        switch (comparison) {
        case 'maior que':
          setFinalFiltered(finalFiltered
            .filter((planet) => Number(planet[column]) > Number(value)));
          break;
        case 'menor que':
          setFinalFiltered(finalFiltered
            .filter((planet) => Number(planet[column]) < Number(value)));
          break;
        case 'igual a':
          setFinalFiltered(finalFiltered
            .filter((planet) => Number(planet[column]) === Number(value)));
          break;
        default: console.log('Erro!');
        }
      });
    }
  };

  useEffect(() => {
    setFinalFiltered(filteredPlanetsByName());
  }, [planets, name]);

  useEffect(() => {
    filteredPlanets();
  }, [filterByNumericValues]);

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Rotation Period</th>
          <th>Orbital Period</th>
          <th>Diameter</th>
          <th>Climate</th>
          <th>Gravity</th>
          <th>Terrain</th>
          <th>Surface Water</th>
          <th>Population</th>
          <th>Films</th>
          <th>Created</th>
          <th>Edited</th>
          <th>URL</th>
        </tr>
      </thead>
      <tbody>
        {
          finalFiltered.length > 0 && finalFiltered.map((planet) => (
            <tr key={ planet.name }>
              <td>{ planet.name }</td>
              <td>{ planet.rotation_period }</td>
              <td>{ planet.orbital_period }</td>
              <td>{ planet.diameter }</td>
              <td>{ planet.climate }</td>
              <td>{ planet.gravity }</td>
              <td>{ planet.terrain }</td>
              <td>{ planet.surface_water }</td>
              <td>{ planet.population }</td>
              <td>{ planet.films }</td>
              <td>{ planet.created }</td>
              <td>{ planet.edited }</td>
              <td>{ planet.url }</td>
            </tr>
          ))
        }
      </tbody>
    </table>
  );
}

export default Table;
