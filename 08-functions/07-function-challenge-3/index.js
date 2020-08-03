//* Write a getCard() function which returns a random playing card object, like:
//*  		{
//*  			value: 'K'
//*  			suit: 'clubs'
//*  		}
//*  Pick a random value from:
//* ----2,3,4,5,6,7,8,9,10,J,Q,K,A
//* Pick a random suit from:
//* ----clubs,spades, hearts, diamonds
//* Return both in an object

//* My Solution
function getRandom(arr) {
  let randNum = Math.round(Math.random() * arr.length);
  return arr[randNum];
}

function getCard() {
  const randomValue = [
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
  const randomSuit = ['clubs', 'spades', 'hearts', 'diamonds'];

  let newCardValue = getRandom(randomValue);
  let newSuitValue = getRandom(randomSuit);

  return {
    value: newCardValue,
    suit: newSuitValue,
  };
}

console.log(getCard());
console.log(getCard());
console.log(getCard());

//* Solution #1
function pick(arr) {
  //* return random element from arr
  const idx = Math.floor(Math.random() * arr.length);
  return arr[idx];
}

function getCardTwo() {
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
  return { value: pick(values), suit: pick(suits) };
}

console.log(getCardTwo());
console.log(getCardTwo());
console.log(getCardTwo());
