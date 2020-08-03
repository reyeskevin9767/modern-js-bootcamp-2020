//* Regular Function Statement
//* Function adds two numbers
function add(x, y) {
  return x + y;
}

console.log(add(4, 5)); // 9

//* Function subtracts two numbers
function sub(x, y) {
  return x - y;
}

console.log(sub(10, 3)); // 7

//* Function Expression (Named)
//* Function adds two numbers
const addNums = function addNum(x, y) {
  return x + y;
};

console.log(addNums(11, 23)); // 34

//* Function subtracts two numbers
const subNums = function subNums(x, y) {
  return x - y;
};

console.log(subNums(45, 11)); // 34

//* Function Expression (Anonymous)
const addNumsTwo = function (x, y) {
  return x + y;
};

console.log(addNumsTwo(45, 44)); // 89

//* Function subtracts two numbers
const subNumsTwo = function (x, y) {
  return x - y;
};

console.log(subNumsTwo(50, 15)); // 35
