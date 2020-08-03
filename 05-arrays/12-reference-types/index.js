//* Value Types - The Variables stores the acutal value
let x = 100;
let y = 99;

x = 999;
console.log(x);
console.log(y);

//* Reference Types - Variables hold a reference to the memory
let nums = [2, 4, 6, 8];
let myNums = nums;
console.log(myNums);

nums.push('Boo!');
console.log(myNums);
