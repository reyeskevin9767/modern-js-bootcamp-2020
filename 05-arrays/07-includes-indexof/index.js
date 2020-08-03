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
//* Checks to see if flour is in ingredients, returns true
if (ingredients.includes('flour')) {
  console.log('I AM GLUTEN FREE, I CANNOT EAT THAT!');
}

//* Checks to see if eel is in ingredients, returns true
if (ingredients.includes('eel')) {
  console.log('FISH IS A GREAT MEAL');
}

//* Checks to see if milk is in ingredients, returns false
if (ingredients.includes('milk')) {
  console.log("I'M GET SICK FROM MILK");
} else {
  console.log('NOT A INGREDIENT');
}

//* IndexOf - returns an index (or -1 if not found)
//* Check if shrimp is in ingredients, returns true
if (ingredients.indexOf('shrimp') !== -1) {
  console.log('Sorry, I hate shrimp');
}

//* Check if water is in ingredients, returns true
if (ingredients.indexOf('water') !== -1) {
  console.log('Drink Water Forever');
}

//* Check if notbutter is in ingredients, returns false
if (ingredients.indexOf('notbutter') !== -1) {
  console.log('Its Not Butter');
} else {
  console.log('Wish it was butter');
}
