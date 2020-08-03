//* Function With One Argument
function greet(nickname) {
  console.log(`Hi ${nickname}`);
}

greet('David'); // Hi David
greet('Sarah'); // Hi Sarah

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

// Results
// Rolled: 3
// Rolled: 3
// Rolled: 2
// Rolled: 5
// Rolled: 2
// Rolled: 6
// Rolled: 6
// Rolled: 6
