const firstReq = new XMLHttpRequest();

//* Add Event Listener to parse the data if successful
firstReq.addEventListener('load', function () {
  console.log('It Work');
  const data = JSON.parse(this.responseText);
  for (let planet of data.results) {
    console.log(planet.name);
  }
});

//* Add Event Listener if an error occurs
firstReq.addEventListener('error', () => {
  console.log('Error');
});

//* Send a GET request to api
firstReq.open('GET', 'https://swapi.dev/api/planets/');
firstReq.send();
console.log('Request Sent!');
