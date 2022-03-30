export default async function getPlanets() {
  const allData = await fetch('https://swapi-trybe.herokuapp.com/api/planets/')
    .then((response) => response.json())
    .then((json) => json);
  return allData.results; // apenas o array com os 10 planetas.
}
