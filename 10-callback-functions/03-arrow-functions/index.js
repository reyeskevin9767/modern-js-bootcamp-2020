//* Non-arrow function expression:
//* const square = function (x) {
//*   return x * x;
//* }

//* Equivalent arrow function
const square = (x) => {
  return x * x;
};

console.log(square(3)); // 9

//* Parens are optional when there is 1 parameter
const isEven = (num) => {
  return num % 2 === 0;
};

console.log(isEven(10)); //* true

//* Must include parens for multiple parameters
const multiply = (x, y) => {
  return x * y;
};

console.log(multiply(3, 5)); // 15

//* Must include parens for zero parameters
const greet = () => {
  console.log('Hi');
};

greet(); // Hi
