const multiply = function (x, y) {
  return x * y;
};

const divide = function (x, y) {
  return x / y;
};

const operations = [multiply, divide];

//* Loops through the functions
for (let func of operations) {
  let result = func(30, 5);
  console.log(result);
}

//* Can store functions in objects
const operObj = {
  mathOper: multiply,
  divOper: divide,
};

console.log(operObj.mathOper(4, 5)); //20
console.log(operObj.divOper(20, 4)); //5
