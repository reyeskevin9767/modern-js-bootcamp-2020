let target = Math.floor(Math.random() * 10);
let guess = Math.floor(Math.random() * 10);

//* Loop Until Guess and Target Match
while (true) {
  if (target === guess) break;
  console.log(`Target: ${target} Guess: ${guess}`);
  guess = Math.floor(Math.random() * 10);
}

console.log(`Target: ${target} Guess: ${guess}`);
console.log(`CONGRATS YOU WIN!!`);
