const runner = {
  first: 'Eliud',
  last: 'Kipchoge',
  country: 'Kenya',
  title: 'Elder of the Order of the Golden Heart of Kenya',
};

//* Rather than destructuring inside the function body
function print(person) {
  const { first, last, title } = person;
  console.log(`${first} ${last}, ${title}`);
}

print(runner); // Eliud Kipchoge Elder of the Order of the Golden Heart of Kenya

//* Unpack the values in the parameter list
function printTwo({ first, last, title }) {
  console.log(`${first} ${last} ${title}`);
}

printTwo(runner); // Eliud Kipchoge Elder of the Order of the Golden Heart of Kenya

//* Unpack the values in the parameter list
function printThree({ first, last, country }) {
  console.log(`${first} ${last} lives in ${country}`);
}

printThree(runner); // Eliud Kipchoge lives in Kenya

const response = ['HTTP/1.1', '200 OK', 'application/json'];

//* Unpack the values in the parameter list
function parseResponse([protocol, statusCode, contentType]) {
  console.log(`Status: ${statusCode}`);
}

parseResponse(response); // Status: 200 OK
