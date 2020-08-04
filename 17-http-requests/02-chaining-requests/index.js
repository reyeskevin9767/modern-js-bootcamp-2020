//* Chaining Requests
//* First Request
const firstReq = new XMLHttpRequest();
firstReq.addEventListener('load', function () {
  console.log('First Request Works');

  const data = JSON.parse(this.responseText);
  const filmURL = data.results[0].films[0];
  const filmReq = new XMLHttpRequest();

  //* Second Request
  filmReq.addEventListener('load', function () {
    console.log('Second Request Works');
    const filmData = JSON.parse(this.responseText);
    console.log(filmData);
  });

  //* If the second request fails
  filmReq.addEventListener('error', function (e) {
    console.log('Error', e);
  });

  filmReq.open('Get', filmURL);
  filmReq.send();
  //     for (let planet of data.results) {
  //         console.log(planet.name);
  //     }
});

//* If the first request fails
firstReq.addEventListener('error', () => {
  console.log('Error');
});

//* Send a GET request to api
firstReq.open('GET', 'https://swapi.dev/api/planets/');
firstReq.send();
console.log('Request Sent!');
