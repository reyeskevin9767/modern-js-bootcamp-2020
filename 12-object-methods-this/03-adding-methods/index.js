//* Adding methods to an object
const math = {
  members: [1, 2, 3, 4, 5, 6],
  add: function (x, y) {
    return x + y;
  },
  multiply: function (x, y) {
    return x * y;
  },
  divide: function (x, y) {
    return x / y;
  },
  subtract: function (x, y) {
    return x - y;
  },
};

//* To execute multiply
console.log(math.add(5, 4)); // 9
console.log(math.multiply(4, 5)); // 20
console.log(math.divide(10, 2)); // 5
console.log(math.subtract(10, 6)); // 4
