let letters = ['T', 'C', 'E', 'P', 'S', 'E', 'R'];
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const weekend = ['Friday', 'Saturday', 'Sunday'];

//* Reverse - reverses the array in place
console.log(letters.reverse());
console.log(nums.reverse());
console.log(weekend.reverse());

//* Join - returns a string of all elements joined the declared separator
let newLetters = letters.join('.');
console.log(newLetters);

let newNums = nums.join('-');
console.log(newNums);

let NewWeekend = weekend.join('  ');
console.log(NewWeekend); //Sunday  Saturday  Friday
