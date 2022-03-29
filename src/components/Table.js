import React from 'react';
import Context from './Context';

function Table() {
  return (
    <>
      <p>oi do Table temporário</p>
      <Context.Consumer>
        {
          (context) => (
            <p>
              oi do context.consumer. context:
              {' '}
              { context }
            </p>
          )
        }
      </Context.Consumer>
    </>
  );
}

export default Table;
