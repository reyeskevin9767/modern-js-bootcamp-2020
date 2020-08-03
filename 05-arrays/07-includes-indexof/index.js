let ingredients = [
  'water',
  'corn starch',
  'flour',
  'cheese',
  'brown sugar',
  'shrimp',
  'eel',
  'butter',
];

//* Includes - returns a boolean value
if (ingredients.includes('flour')) {
  console.log('I AM GLUTEN FREE, I CANNOT EAT THAT!');
}

if (ingredients.includes('eel')) {
  console.log('FISH IS A GREAT MEAL');
}

if (ingredients.includes('milk')) {
  console.log("I'M GET SICK FROM MILK");
} else {
  console.log('NOT A INGREDIENT');
}

//* IndexOf - returns an index (or -1 if not found)
if (ingredients.indexOf('shrimp') !== -1) {
  console.log('Sorry, I hate shrimp');
}

if (ingredients.indexOf('water') !== -1) {
  console.log('Drink Water Forever');
}

if (ingredients.indexOf('notbutter') !== -1) {
  console.log('Its Not Butter');
} else {
  console.log('Wish it was butter');
}
