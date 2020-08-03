//* let & Const cannot be accessed in block scoped
if (true) {
  const animal = 'eel';
  console.log(animal); // eel
}

console.log(animal); // Not Defined

//* Var can be accessed in Block Scoped
if (true) {
  var animal = 'dog';
  console.log(animal); // dog
}
console.log(animal); // dog
