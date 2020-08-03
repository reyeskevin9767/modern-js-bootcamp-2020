//* Regular Function Statement
function add(x, y) {
  return x + y;
}

console.log(add(4, 5));

//* Function subtracts two numbers
function sub(x, y) {
  return x - y;
}

console.log(sub(10, 3)); //7

//* Function Expression (Named)
const addNums = function addNum(x, y) {
  return x + y;
};

console.log(addNums(11, 23));

const subNums = function subNums(x, y) {
  return x - y;
};

console.log(subNums(45, 11));

//* Function Expression (Anonymous)
const addNumsTwo = function (x, y) {
  return x + y;
};

console.log(addNumsTwo(45, 44)); //89

const subNumsTwo = function (x, y) {
  return x - y;
};

console.log(subNumsTwo(50, 15)); //35
