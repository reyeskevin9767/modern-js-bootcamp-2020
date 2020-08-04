//* Check if their was a response
const checkStatusAndParse = (response) => {
  if (!response.ok) {
    throw new Error(`Status Code Error: ${response.status}`);
  }

  return response.json();
};

//* Console Log planets
const printPlanets = (data) => {
  console.log('Load 10 more planets....');
  for (let planet of data.results) {
    console.log(planet.name);
  }
  return Promise.resolve(data.next);
};

//* Fetch url
const fetchNextPlanets = (url = 'https://swapi.dev/api/planets/') => {
  return fetch(url);
};

//* Chaining Requests
fetchNextPlanets()
  .then(checkStatusAndParse)
  .then(printPlanets)
  .then(fetchNextPlanets)
  .then(checkStatusAndParse)
  .then(printPlanets)
  .then(fetchNextPlanets)
  .then(checkStatusAndParse)
  .then(printPlanets)
  .catch((err) => {
    console.log('SOMETHING WENT WRONG');
    console.log(err);
  });
