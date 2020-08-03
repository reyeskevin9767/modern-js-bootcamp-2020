const raceResults = [
  'Eliud Kipchoge',
  'Feyisa Lelisa',
  'Galen Rupp',
  'Ghirmay Ghebreslassie',
  'Alphonce Simbu',
  'Jared Ward',
];

// The old way:
// const gold = raceResults[0]
// const silver = raceResults[1]
// const bronze = raceResults[2]

//* Using destructuring
const [gold, silver, bronze] = raceResults;

console.log(gold); // Eliud Kipchoge
console.log(silver); // Feyisa Lelisa
console.log(bronze); // Galen Rupp

//* Using destructuring with skips
const [first, , , fourth] = raceResults;

console.log(first); // Eliud Kipchoge
console.log(fourth); // Ghirmay Ghebreslassie

//* Using destructuring and resting
const [winner, ...other] = raceResults;
console.log(winner); // Eliud Kipchoge
console.log(other); // ["Feyisa Lelisa", "Galen Rupp", "Ghirmay Ghebreslassie", "Alphonce Simbu", "Jared Ward"]
