//* Chaining Fetch requests
fetch('https://swapi.dev/api/planets/')
  .then((response) => {
    if (!response.ok) {
      throw new Error(`Status Code Error: ${response.status}`);
    }

    return response.json();
  })
  .then((data) => {
    console.log('FETCHED ALL Plantes (First 10)');
    const filmURL = data.results[0].films[0];
    return fetch(filmURL);
  })
  .then((response) => {
    if (!response.ok) {
      throw new Error(`Status Code Error: ${response.status}`);
    }

    return response.json();
  })
  .then((data) => {
    console.log('FETCH FIRST FILM, BASED OFF of first planet');
    console.log(data.title);
  })
  .catch((err) => {
    console.log('SOMETHING WENT WRONG');
    console.log(err);
  });
