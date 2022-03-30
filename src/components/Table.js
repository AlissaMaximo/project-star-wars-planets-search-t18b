import React from 'react';
import Context from '../context/MyContext';

function Table(/* aqui vem o valor do context */) {
  return (
    <>
      <p>oi do Table temporário</p>
      <Context.Consumer>
        {
          (context) => (
            <>
              <p>
                oi do context.consumer. context:
                {' '}
                { context }
              </p>
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
                    //aqui entra o map com os <tr> <td></td> </tr>
                  }
                </tbody>
              </table>
            </>
          )
        }
      </Context.Consumer>
    </>
  );
}

export default Table;
