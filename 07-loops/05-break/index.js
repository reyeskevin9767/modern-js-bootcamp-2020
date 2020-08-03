let target = Math.floor(Math.random() * 10); // Generate A Number 1 - 10
let guess = Math.floor(Math.random() * 10);

//* Loop Until Guess and Target Match
while (true) {
  if (target === guess) break;
  console.log(`Target: ${target} Guess: ${guess}`);
  guess = Math.floor(Math.random() * 10);
}

console.log(`Target: ${target} Guess: ${guess}`);
console.log(`CONGRATS YOU WIN!!`);

// One Result
// Target: 8 Guess: 1
// Target: 8 Guess: 7
// Target: 8 Guess: 1
// Target: 8 Guess: 5
// Target: 8 Guess: 4
// Target: 8 Guess: 3
// Target: 8 Guess: 7
// Target: 8 Guess: 7
// Target: 8 Guess: 1
// Target: 8 Guess: 1
// Target: 8 Guess: 4
// Target: 8 Guess: 8
// CONGRATS YOU WIN!!
