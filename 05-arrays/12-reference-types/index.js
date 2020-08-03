//* Value Types - The Variables stores the acutal value
let x = 100;
let y = 99;

x = 999; //Changing x doesn't change y
console.log(x); //999
console.log(y); //99

//* Reference Types - Variables hold a reference to the memory
let nums = [2, 4, 6, 8];
let myNums = nums; // myNums referenece the same array
console.log(myNums); // [2, 4, 6, 8]

nums.push('Boo!'); // Changing nums changes myNums
console.log(myNums); // [2, 4, 6, 8, 'Boo!']
