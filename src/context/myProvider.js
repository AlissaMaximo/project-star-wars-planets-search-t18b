import React, { useState } from 'react';
import myContext from './MyContext';

function Provider({ children }) {
  const INITIAL_STATE = { nomeExemplo: 'exemplo' };
  const [state, setState] = useState(INITIAL_STATE);

  return (
    <myContext.Provider value={ state }>
      { children }
    </myContext.Provider>
  );
}

export default Provider;
