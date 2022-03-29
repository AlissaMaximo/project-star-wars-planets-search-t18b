import React from 'react';
import Context from '../context/MyContext';

function Table(/* aqui vem o valor do context */) {
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
