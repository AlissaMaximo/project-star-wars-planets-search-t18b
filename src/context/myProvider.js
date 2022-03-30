import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import myContext from './MyContext';
import getPlanets from '../fetch';

function Provider({ children }) {
  const INITIAL_STATE = {};
  const [planets, setPlanets] = useState(INITIAL_STATE);

  useEffect(() => {
    getPlanets().then((planetsData) => {
      setPlanets(planetsData);
    });
  }, []);

  return (
    <myContext.Provider value={ { planets } }>
      { children }
    </myContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.isRequired,
};

export default Provider;
