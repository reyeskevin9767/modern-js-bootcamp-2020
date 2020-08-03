let animals = ['shark', 'salmon', 'whale', 'bear', 'lizard', 'tortoise'];

//* splice(startIdx, deleteCount, itemsToInsert)
animals.splice(1, 0, 'octopus');
console.log(animals);

animals.splice(5, 2);
console.log(animals);

animals.splice(3, 2, 'orca', 'grizzly');
console.log(animals);
