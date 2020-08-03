const runner = {
  first: 'Eliud',
  last: 'Kipchoge',
  country: 'Kenya',
  title: 'Elder of the Order of the Golden Heart of Kenya',
};

//* Using destructuring
const { first, last, title } = runner;

console.log(first); // Eliud
console.log(last); // Kipchoge
console.log(title); // Elder of the Order of the Golden Heart of Kenya

//* Using destructuring
const { country: nation, title: honorific } = runner;

console.log(nation); // Kenya
console.log(honorific); // Elder of the Order of the Golden Heart of Kenya

//* Using destructuring
const { first: firstTwo, last: lastTwo, ...others } = runner;

console.log(firstTwo); // Eliud
console.log(lastTwo); // Kipchoge
console.log(others); // {country: 'Kenya', title: 'Elder of the Order of the Golden Heart of Kenya'}
