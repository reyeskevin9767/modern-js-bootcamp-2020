//* Arrow Function
const square = (n) => {
  return n * n;
};

//* Arrow Function With a Implicit Return
const divide = (n) => {
  n * n;
};

//* Implicit return one-liner
const multiply = (n) => n * n;

//* All theses functions give the same results
//* Multiplies the numb in array by 2
const nums = [1, 2, 3, 4, 5, 6, 7, 8];
const double = nums.map(function (n) {
  return n * 2;
});

console.log(double); // [2,  4,  6,  8, 10, 12, 14, 16]

const doubleTwo = nums.map((n) => {
  return n * 2;
});

console.log(doubleTwo); // [2,  4,  6,  8, 10, 12, 14, 16]

const doubleThree = nums.map((n) => n * 2);

console.log(doubleThree); // [2,  4,  6,  8, 10, 12, 14, 16]

//* All theses functions give the same results
//* Checks to see if num is even or odd in array
const parityList = nums.map(function (n) {
  if (n % 2 === 0) return 'even';
  return 'odd';
});

console.log(parityList); // ['odd', 'even','odd', 'even','odd', 'even','odd', 'even']

const parityListTwo = nums.map((n) => {
  if (n % 2 === 0) return 'even';
  return 'odd';
});

console.log(parityListTwo); // ['odd', 'even','odd', 'even','odd', 'even','odd', 'even']

const parityListThree = nums.map((n) => (n % 2 === 0 ? 'even' : 'odd'));

console.log(parityListThree); // ['odd', 'even','odd', 'even','odd', 'even','odd', 'even']

const parityListFour = nums.map((n) => (n % 2 === 0 ? 'even' : 'odd'));

console.log(parityListFour); // ['odd', 'even','odd', 'even','odd', 'even','odd', 'even']
