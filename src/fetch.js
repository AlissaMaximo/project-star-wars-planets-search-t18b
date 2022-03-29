export default async function getPlanets() {
  return fetch('https://swapi-trybe.herokuapp.com/api/planets/').then((res) => res.json()).then((json) => json);
}
