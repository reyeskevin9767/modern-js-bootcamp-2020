//* Concat
let fruits = ['apple', 'banana'];
let veggies = ['asparagus', 'brussel sprouts'];
let meats = ['steak', 'chicken breast'];
let snacks = ['jello', 'cookies', 'peanuts'];

//* Combine Arrays Into A New Array
console.log(fruits.concat(veggies)); // [ 'apple', 'banana', 'asparagus', 'brussel sprouts' ]
console.log(veggies.concat(fruits)); // [ 'asparagus', 'brussel sprouts', 'apple', 'banana' ]
console.log(snacks.concat(fruits)); // [ 'jello', 'cookies', 'peanuts', 'apple', 'banana' ]

let allFoods = fruits.concat(veggies, meats);
console.log(allFoods); // ['apple','banana','asparagus','brussel sprouts','steak','chicken breast']
