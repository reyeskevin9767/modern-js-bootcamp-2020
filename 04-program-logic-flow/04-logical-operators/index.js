//* AND (&&)
console.log(1 <= 4 && 'a' === 'a');
console.log(9 > 10 && 9 >= 9);
console.log('abc'.length === 3 && 1 + 1 === 4);

let password = 'taco tuesday';

if (password.length >= 6 && password.indexOf(' ') === -1) {
  console.log('Valid Password');
} else {
  console.log('Invalid Password');
}

//* OR (||)
console.log(1 != 1 || 10 === 10);
console.log(10 / 2 === 5 || null);
console.log(0 || undefined);

let age = 76;

if (age < 6 || age >= 65) {
  console.log('You get in for free!');
} else {
  console.log('That will be $10 please');
}

//* NOT (!)
console.log(!null);
console.log(!(0 === 0));
console.log(!(3 <= 4));

let oldAge = 76;

if (!(oldAge >= 21)) {
  console.log('NOt An Adult');
} else {
  console.log('You are an Adult');
}
