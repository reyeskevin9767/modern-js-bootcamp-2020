function giveMeFive(a, b, c, d, e) {
  console.log('a ', a);
  console.log('b ', b);
  console.log('c ', c);
  console.log('d ', d);
  console.log('e ', e);
}

const colors = ['red', 'orange', 'yellow', 'green', 'blue'];

//* Without spread
giveMeFive(colors);

// Result
// a ["red", "orange", "yellow", "green"]
// b undefined
// c undefined
// d undefined

//* With spread Values are passed as separate args:
giveMeFive(...colors);

// Result
// a 'red'
// b 'orange'
// c 'yellow'
// d 'green'

//* Can also spread strings!
giveMeFive(...'GOAT');

// Result
// a G
// b O
// c A
// d T
