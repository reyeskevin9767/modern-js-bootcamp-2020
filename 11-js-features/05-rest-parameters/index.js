//* Function that uses rest
function sum(...nums) {
  return nums.reduce((total, currVal) => {
    return total + currVal;
  });
}

console.log(sum(3, 2, 3, 4, 5, 5, 6, 1)); // 29

//* Can have named params and then collect the rest into an array:
function fullName(first, last, ...titles) {
  console.log('first', first);
  console.log('last', last);
  console.log('titles', titles);
}

fullName('Dev', 'Space', 'champion', 'solo');

// Results
// first Dev
// last Space
// titles [ 'champion', 'solo' ]

//* Can use rest parameters in arrow functions
const multiply = (...nums) => nums.reduce((total, currVal) => total * currVal);

console.log(multiply(3, 2, 3, 4, 5, 5, 6, 1)); //10800
