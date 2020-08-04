//* Use axios to request url
const fetchNextPlanets = (url = 'https://swapi.dev/api/planets/') => {
  return axios.get(url);
};

//* Console Log the planets
const printPlanets = ({ data }) => {
  console.log(data);
  for (let planet of data.results) {
    console.log(planet.name);
  }
  return Promise.resolve(data.next);
};

//* Chaining with axios
fetchNextPlanets()
  .then(printPlanets)
  .then(fetchNextPlanets)
  .then(printPlanets)
  .then(fetchNextPlanets)
  .then(printPlanets)
  .then(fetchNextPlanets)
  .then(printPlanets)
  .then(fetchNextPlanets)
  .catch((err) => {
    console.log('In Catch');
    console.log(err);
  });
