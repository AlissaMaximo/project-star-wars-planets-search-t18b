import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import myContext from './MyContext';
import getPlanets from '../fetch';

function Provider({ children }) {
  const INITIAL_STATE = {};
  const [planets, setPlanets] = useState(INITIAL_STATE);

  useEffect(() => {
    const fetchedPlanets = async () => {
      const planetsData = await getPlanets();

      setPlanets(planetsData);
    };

    fetchedPlanets();
  }, []);

  const context = {
    planets,
  };

  return (
    <myContext.Provider value={ context }>
      { children }
    </myContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.shape().isRequired,
};

export default Provider;
