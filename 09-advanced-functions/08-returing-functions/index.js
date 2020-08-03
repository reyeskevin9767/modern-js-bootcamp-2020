//* This function returns a function. Also now as a 'function factory'
function multiplyBy(num) {
  return function (x) {
    return x * num;
  };
}

//* This function multiplies the input by 3
const triple = multiplyBy(3);

console.log(triple(5)); // 15
console.log(triple(10)); // 15

//* This function multiplies the input by 2
const double = multiplyBy(2);

console.log(double(3)); // 6
console.log(double(9)); // 9

//* This function multiplies the input by 0.5
const halve = multiplyBy(0.5);

console.log(halve(5)); // 2.5
console.log(halve(100)); // 50

//* This function returns a function. Also now as a 'function factory'
function makeBetweenFunc(x, y) {
  return function (num) {
    return num >= x && num <= y;
  };
}

//* This function checks if a value is between 0 and 18
const isChild = makeBetweenFunc(0, 18);
console.log(isChild(10)); // true
console.log(isChild(56)); // false

//* This function checks if a value is between 1990 and 1999
const isInNineties = makeBetweenFunc(1990, 1999);
console.log(isInNineties(1994)); // true
console.log(isInNineties(1987)); // false

//*This function checks if a value is between 60 and 79
const isNiceWeather = makeBetweenFunc(60, 79);
console.log(isNiceWeather(68)); // true
console.log(isNiceWeather(98)); // false
