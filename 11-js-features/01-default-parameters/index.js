// The old way of adding a default value:
// function multiply(x, y) {
//   if (typeof y === 'undefined') {
//     y = 1;
//   }
//   return x * y;
// }

// A slightly shorter version:
// function multiply(x, y) {
//   y = typeof y === 'undefined' ? 1 : y
//   return x * y;
// }

//* Function That Has Default Parameters
function multiply(x, y = 1) {
  return x * y;
}

console.log(multiply(3, 4)); // 12
console.log(multiply(3)); // 3

//* Default value of an array:
const defaultArray = (x, y = [1, 2, 3, 4]) => {
  console.log(x, y);
};

defaultArray([1, 3, 4, 5]); // [ 1, 3, 4, 5 ] [ 1, 2, 3, 4 ]

// const greet = (person, greeting = 'hi') => {
//   console.log(`${greeting}, ${person}!`)
// }

//* Multiple default values are possible, but rare
const greet = (person, greeting = 'hi', punctuation = '!') => {
  console.log(`${greeting}, ${person} ${punctuation}`);
};

greet('Sally'); //hi, Sally !
