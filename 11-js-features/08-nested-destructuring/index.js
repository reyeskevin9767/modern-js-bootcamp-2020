const results = [
  {
    first: 'Eliud',
    last: 'Kipchoge',
    country: 'Kenya',
  },
  {
    first: 'Feyisa',
    last: 'Lilesa',
    country: 'Ethiopia',
  },
  {
    first: 'Galen',
    last: 'Rupp',
    country: 'United States',
  },
];

//* Using destructuring
const [{ first: goldWinner }, { first }] = results;

console.log(goldWinner); // Eliud
console.log(first); // Feyisa

//* Using destructuring
const [
  { first: firstName },
  { last: lastName },
  { country: nationTwo },
] = results;

console.log(firstName); // Eliud
console.log(lastName); // Lilesa
console.log(nationTwo); // United States
