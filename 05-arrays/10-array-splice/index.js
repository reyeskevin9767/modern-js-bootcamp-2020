let animals = ['shark', 'salmon', 'whale', 'bear', 'lizard', 'tortoise'];

//* splice(startIdx, deleteCount, itemsToInsert)
animals.splice(1, 0, 'octopus'); // At index 1, delete 0 elements, add octopus
console.log(animals); // ['shark', 'octopus', 'salmon', 'whale', 'bear', 'lizard', 'tortoise']

animals.splice(5, 2); // At index 5, delete 2 elements from index point
console.log(animals); // ['shark', 'octopus', 'salmon', 'whale', 'bear']

animals.splice(3, 2, 'orca', 'grizzly'); // At index 3, delete 2 elements from index point, Then add two new elements
console.log(animals); // ['shark', 'octopus', 'salmon', 'orca', 'grizzly']
