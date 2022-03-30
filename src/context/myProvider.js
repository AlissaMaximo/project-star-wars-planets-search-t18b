import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import myContext from './MyContext';
import getPlanets from '../fetch';

function Provider({ children }) {
  const [planets, setPlanets] = useState([]);
  const [filterByName, setFilterByName] = useState({ name: '' }); // André Torres e Letícia Mayr deram a ideia e explicaram como funciona o objeto dentro do useState
  const [filterByNumericValues, setFilterByNumericValues] = useState(
    [{ column: 'population', comparison: 'biggerThan', value: 0 }],
  );

  useEffect(() => {
    const fetchPlanets = async () => {
      const planetsData = await getPlanets();

      setPlanets(planetsData);
    };

    fetchPlanets();
  }, []);

  return (
    <myContext.Provider
      value={ {
        planets,
        filterByName,
        filterByNumericValues,
        setFilterByName,
        setFilterByNumericValues,
      } }
    >
      { children }
    </myContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.arrayOf(PropTypes.objectOf).isRequired,
};

export default Provider;
