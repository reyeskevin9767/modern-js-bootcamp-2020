let animals = ['shark', 'salmon', 'whale', 'bear', 'lizard', 'tortoise'];

//* Slice creates a new array from the elements
let allAnimals = animals.slice(0, animals.length);
console.log(allAnimals);

let swimmmers = animals.slice(0, 3);
console.log(swimmmers);

let quadruped = animals.slice(-3);
console.log(quadruped);
