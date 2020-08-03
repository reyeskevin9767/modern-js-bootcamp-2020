//* Step 1: Define The Function

//* Function that once called, will run entire inner content
function grumpus() {
  console.log('ugh...you again...');
  console.log('FOR THE LAST TIME...');
  console.log('LEAVE ME ALONE!!!');
}

//* Step 2: Call The Function
grumpus();
grumpus();
grumpus();

//* Loop The Function 50 Times
for (let i = 0; i < 50; i++) {
  grumpus();
}

//* Define Function
function rollDice() {
  let roll = Math.floor(Math.random() * 6) + 1;
  console.log(`Rolled: ${roll}`);
}

//* Call functions inside of other functions
function throwDice() {
  rollDice();
  rollDice();
  rollDice();
  rollDice();
  rollDice();
}

//* Call Function
throwDice();
