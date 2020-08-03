const magicSquare = [
  [2, 7, 6],
  [9, 5, 1],
  [4, 3, 8],
];

//* For Loop
for (let i = 0; i < magicSquare.length; i++) {
  let row = magicSquare[i];
  let sum = 0;

  for (let j = 0; j < row.length; j++) {
    sum += row[j];
  }
  console.log(`${row} summed to ${sum}`);
}

// Results
// 2,7,6 summed to 15
// 9,5,1 summed to 15
// 4,3,8 summed to 15

//* For...Of Loop Version
for (let row of magicSquare) {
  let sum = 0;

  for (let num of row) {
    sum += num;
  }

  console.log(`${row} summed to ${sum}`);
}

// Results
// 2,7,6 summed to 15
// 9,5,1 summed to 15
// 4,3,8 summed to 15

//* Need Indices, Use Regular For Loop
const words = ['mail', 'milk', 'bath', 'black'];
const wordsTwo = ['box', 'shake', 'tub', 'berry'];

//* Access index i of both arrays
for (let i = 0; i < words.length; i++) {
  console.log(`${words[i]}${wordsTwo[i]}`);
}

// Results
// mailbox
// milkshake
// bathtub
// blackberry
