//* Also known as multi dimensional array
const animalPairs = [
  ['doe', ['buck', 'stag']],
  ['ewe', 'ram'],
  ['peahen', 'peacock'],
];

let pair = animalPairs[1][0];
console.log(pair); // ewe

let pair1 = animalPairs[0][1][0];
console.log(pair1); // buck

animalPairs[0][1].push('hart');
console.log(animalPairs); // [[ 'doe', [ 'buck', 'stag', 'hart' ] ],[ 'ewe', 'ram' ],[ 'peahen', 'peacock' ]]
