//* Concat
let fruits = ['apple', 'banana'];
let veggies = ['asparagus', 'brussel sprouts'];
let meats = ['steak', 'chicken breast'];
let snacks = ['jello', 'cookies', 'peanuts'];

//* Combine Arrays Into A New Array
console.log(fruits.concat(veggies));
console.log(veggies.concat(fruits));
console.log(snacks.concat(fruits));

let allFoods = fruits.concat(veggies, meats);
console.log(allFoods);
