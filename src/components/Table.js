import React, { useContext } from 'react';
import Context from '../context/MyContext';

function Table() {
  const { planets } = useContext(Context);

  return (
    <>
      <p>oi do Table temporário</p>

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
            console.log(planets)
            // aqui entra o map com os <tr> <td></td> </tr>
          }
        </tbody>
      </table>
    </>
  );
}

export default Table;
