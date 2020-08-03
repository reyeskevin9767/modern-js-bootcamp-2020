//* AND (&&)
console.log(1 <= 4 && 'a' === 'a'); // true
console.log(9 > 10 && 9 >= 9); // false
console.log('abc'.length === 3 && 1 + 1 === 4); // false

let password = 'taco tuesday';

//* Checks to see if password is >= 6 and doesn't  contain a space
if (password.length >= 6 && password.indexOf(' ') === -1) {
  console.log('Valid Password');
} else {
  console.log('Invalid Password');
}

//* OR (||)
console.log(1 != 1 || 10 === 10); // true
console.log(10 / 2 === 5 || null); // true
console.log(0 || undefined); // false

let age = 76;
//* Checks if age is lest than 6 or age is greater than or equal to 65
if (age < 6 || age >= 65) {
  console.log('You get in for free!');
} else {
  console.log('That will be $10 please');
}

//* NOT (!)
console.log(!null); // true
console.log(!(0 === 0)); //false
console.log(!(3 <= 4)); // false

let oldAge = 76;

//* Checks if age is greater than 21, then NOT the result
if (!(oldAge >= 21)) {
  console.log('NOt An Adult');
} else {
  console.log('You are an Adult');
}
