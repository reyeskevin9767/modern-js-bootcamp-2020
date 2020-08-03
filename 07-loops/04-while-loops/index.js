//* For Loop
for (let i = 0; i <= 5; i++) {
  console.log(i);
}

// Results
// 0
// 1
// 2
// 3
// 4
// 5

//* Recreating the above for loop w/ a while loop
let j = 0;
while (j <= 5) {
  console.log(j);
  j++;
}

// Results
// 0
// 1
// 2
// 3
// 4
// 5

//* More advanced While Loop
let target = Math.floor(Math.random() * 10); // Generate A Number 1 - 10
let guess = Math.floor(Math.random() * 10);

//* Loop Until Guess and Target Match
while (guess !== target) {
  console.log(`Target: ${target} Guess: ${guess}`);
  guess = Math.floor(Math.random() * 10);
}

console.log(`Target: ${target} Guess: ${guess}`);
console.log(`CONGRATS YOU WIN!!`);

// One Result
// Target: 4 Guess: 0
// Target: 4 Guess: 7
// Target: 4 Guess: 4
// CONGRATS YOU WIN!!
