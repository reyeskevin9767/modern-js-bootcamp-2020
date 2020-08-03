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

// Reviews
// You rated Arrival - 9.5
// You rated Alien - 9
// You rated Amelie - 8
// You rated In Bruges - 9
// You rated Amadeus - 10
// You rated Kill Bill - 8
// You rated Little Miss Sunshine - 8.5
// You rated Coraline - 7.5
// Average Rating:  8.6875

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

// Results
// poloShirt is Large
// longSleeve is Small
// shortSleeve is Medium
// tankTop is Small
