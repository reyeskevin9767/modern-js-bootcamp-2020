//* For Loop
for (let i = 0; i <= 5; i++) {
  console.log(i);
}

//* Recreating the above for loop w/ a while loop
let j = 0;
while (j <= 5) {
  console.log(j);
  j++;
}

//* More advanced While Loop
let target = Math.floor(Math.random() * 10);
let guess = Math.floor(Math.random() * 10);

//* Loop Until Guess and Target Match
while (guess !== target) {
  console.log(`Target: ${target} Guess: ${guess}`);
  guess = Math.floor(Math.random() * 10);
}

console.log(`Target: ${target} Guess: ${guess}`);
console.log(`CONGRATS YOU WIN!!`);
