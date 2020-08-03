//* Shorthand Methods
const auth = {
  username: 'TommyBot',
  login() {
    console.log('Logged You In!');
  },
  logout() {
    console.log('GoodBye');
  },
};

auth.login(); // Logged You In!
auth.logout(); // GoodBye

//* Shorthand Methods
const math = {
  members: [1, 2, 3, 4, 5, 6],
  add(x, y) {
    return x + y;
  },
  multiply(x, y) {
    return x * y;
  },
  divide(x, y) {
    return x / y;
  },
  subtract(x, y) {
    return x - y;
  },
};

//* To execute multiply
console.log(math.add(5, 4)); // 9
console.log(math.multiply(4, 5)); // 20
console.log(math.divide(10, 2)); // 5
console.log(math.subtract(10, 6)); // 4
