//* Variables declared with var are hoisted
console.log(animals); // Tapir
var animals = 'Tapir';
console.log(animals); // Tapir

//* Variables declared with let & const are not hoisted
const shrimp = 'Harlequin Shrimp';
console.log(shrimp); // Harlequin Shrimp

//* Function statements are hoisted
howl();

function howl() {
  console.log('Awoooooo');
}

//* function expressions are...kind of hoisted.
//* The variable is hoisted, but has a value of undefined

//* hoot();

var hoot = function () {
  console.log('HOOOOO HOOOO');
};
