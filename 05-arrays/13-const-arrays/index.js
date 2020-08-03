//* Best to use const with assigning variables to arrays
const myEggs = ['brown', 'yellow'];

myEggs.push('purple');
console.log(myEggs); // [ 'brown', 'yellow', 'purple' ]

myEggs[0] = 'green';
console.log(myEggs); // [ 'brown', 'yellow', 'purple' ]
