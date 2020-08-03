//* String Quiz
const age = '5' + '4';
console.log(age); // Age Equals 54

console.log('pecacn pie'[7]); // Results in p
console.log('PUP'[3]); // Results in undefined

let song = 'london calling';
console.log(song.toUpperCase()); // Results in LONDON CALLING

let userInput = '   TODD@gamil.com';
let clearnedInput = userInput.trim().toLowerCase();
console.log(clearnedInput); // Results in 'todd@gmail.com'

let park = 'Yellowstone';
const index = park.indexOf('Stone');
console.log(index); // Results in -1

let yell = 'GO AWAY!!';
let index2 = yell.indexOf('!');
console.log(index2); // Results in 7

console.log('GARBAGE!'.slice(2).replace('B', '')); // Results in RAGE!
