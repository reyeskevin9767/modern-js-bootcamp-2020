let letters = ['T', 'C', 'E', 'P', 'S', 'E', 'R'];
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const weekend = ['Friday', 'Saturday', 'Sunday'];

//* Reverse - reverses the array in place
console.log(letters.reverse()); // ['R', 'E', 'S','P', 'E', 'C','T']
console.log(nums.reverse()); // [9, 8, 7, 6, 5,4, 3, 2, 1]
console.log(weekend.reverse()); // [ 'Sunday', 'Saturday', 'Friday' ]

//* Join - returns a string of all elements joined the declared separator
let newLetters = letters.join('.');
console.log(newLetters); // 'R.E.S.P.E.C.T'

let newNums = nums.join('-');
console.log(newNums); // 9-8-7-6-5-4-3-2-1

let NewWeekend = weekend.join('  ');
console.log(NewWeekend); // Sunday  Saturday  Friday
