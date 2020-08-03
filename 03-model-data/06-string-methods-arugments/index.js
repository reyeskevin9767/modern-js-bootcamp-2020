//* IndexOf
let tvShow = 'catdog';
console.log(tvShow.indexOf('dog')); // 3
console.log(tvShow.indexOf('z')); // -1 (Not Found)

let newAnimal = 'turtle';
console.log(newAnimal.indexOf('tle')); // 3
console.log(newAnimal.indexOf('s')); // -1 (Not Found)

let cities = 'New York City';
console.log(cities.indexOf('York')); // 4
console.log(cities.indexOf('a')); // -1 (Not Found)

//* Slice
let newStr = 'supercallifrailisticexpialidocious';
console.log(newStr.slice(0, 5)); //super
console.log(newStr.slice(5)); // callifrailisticexpialidocious

let newFruit = 'Strawberry';
console.log(newFruit.slice(3, 7)); // awbe
console.log(newFruit.slice(-1)); // y

let newPlant = 'tumberweed';
console.log(newPlant.slice(3, 7)); // berw
console.log(newPlant.slice(-3)); // eed

//* Replace
let annoyingLaugh = 'teehee so funny! teehee!';
console.log(annoyingLaugh.replace('teehee', 'haha')); // haha so funny! haha!

let bigSlime = 'Teah gives backs a small smile';
console.log(bigSlime.replace('small', 'big')); // Teah gives backs a big smile

let trashWords = 'Need To Change the word bad';
console.log(trashWords.replace('bad', 'good')); // Need To Change the word good
