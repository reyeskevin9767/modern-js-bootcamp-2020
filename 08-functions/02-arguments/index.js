//* Function With One Argument
function greet(nickname) {
  console.log(`Hi ${nickname}`);
}

greet('David');
greet('Sarah');

//* Roll Determine By Input
function rollDie() {
  let roll = Math.floor(Math.random() * 6) + 1;
  console.log(`Rolled: ${roll}`);
}

function throwDice(numRolls) {
  for (let i = 0; i < numRolls; i++) {
    rollDie();
  }
}

throwDice(3);
throwDice(5);
