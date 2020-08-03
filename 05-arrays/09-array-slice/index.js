let animals = ['shark', 'salmon', 'whale', 'bear', 'lizard', 'tortoise'];

//* Slice creates a new array from the elements
let allAnimals = animals.slice(0, animals.length);
console.log(allAnimals); // [ 'shark', 'salmon', 'whale', 'bear', 'lizard', 'tortoise' ]

let swimmmers = animals.slice(0, 3);
console.log(swimmmers); // ["shark", "salmon", "whale"]

let quadruped = animals.slice(-3);
console.log(quadruped); // ["bear", "lizard", "tortoise"]
