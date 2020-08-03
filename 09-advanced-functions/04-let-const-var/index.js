//* let & Const cannot be accessed in block scoped
if (true) {
  const animal = 'eel';
  console.log(animal);
}

console.log(animal);

/* -------------------------------------------------------------------------- */

//* Var can be accessed in Block Scoped
if (true) {
  var animal = 'dog';
  console.log(animal);
}
console.log(animal);
