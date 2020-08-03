const movieReviews = {
  Arrival: 9.5,
  Alien: 9,
  Amelie: 8,
  'In Bruges': 9,
  Amadeus: 10,
  'Kill Bill': 8,
  'Little Miss Sunshine': 8.5,
  Coraline: 7.5,
};

//* Can Iterate Over The Keys of An Object
for (let movie of Object.keys(movieReviews)) {
  console.log(`You rated ${movie} - ${movieReviews[movie]}`);
}

//* Can Iterate Over The Keys of An Object
const ratings = Object.values(movieReviews);
let total = 0;

for (let r of ratings) {
  total += r;
}

let avg = total / ratings.length;
console.log('Average Rating: ', avg);

//* Another Example
const shirtSize = {
  poloShirt: 'Large',
  longSleeve: 'Small',
  shortSleeve: 'Medium',
  tankTop: 'Small',
};

//* Can Iterate Over The Keys of An Object
for (let key of Object.keys(shirtSize)) {
  console.log(`${key} is ${shirtSize[key]}`);
}
