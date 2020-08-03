//* Function multiplies numbers
const multiply = function (x, y) {
  return x * y;
};

//* Function divides numbers
const divide = function (x, y) {
  return x / y;
};

//* Can store functions in an array
const operations = [multiply, divide];

//* Loops through the functions
for (let func of operations) {
  let result = func(30, 5);
  console.log(result);
}

// Result
// 150
// 6

//* Can store functions in objects and assign functions to values
const operObj = {
  mathOper: multiply,
  divOper: divide,
};

console.log(operObj.mathOper(4, 5)); // 20
console.log(operObj.divOper(20, 4)); // 5
