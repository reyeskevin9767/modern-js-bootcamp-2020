// The "old" way:
//   return {
//     max: max,
//     min: min,
//     sum: sum,
//     avg: avg
//   }
// }

const nums = [32, 33, 4, 55, 77, 43, 10, 34, 56, 88];

//* Function gets max, min, sum, avg
const getStats = (arr) => {
  const max = Math.max(...arr);
  const min = Math.min(...arr);
  const sum = arr.reduce((sum, r) => sum + r);
  const avg = sum / arr.length;

  //* Use Shorthand Property Syntax
  return {
    max,
    min,
    sum,
    avg,
  };
};

console.log(getStats(nums)); // { max: 88, min: 4, sum: 432, avg: 43.2 }

//* Function returns random element from arr
function pick(arr) {
  const idx = Math.floor(Math.random() * arr.length);
  return arr[idx];
}

//* Function gets a card
function getCard() {
  const values = [
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '10',
    'J',
    'Q',
    'K',
    'A',
  ];

  const suits = ['clubs', 'spades', 'hearts', 'diamonds'];
  const value = pick(values);
  const suit = pick(suits);

  //* ShortHand Properties
  return {
    value,
    suit,
  };
}

console.log(getCard()); // { value: '8', suit: 'diamonds' }
