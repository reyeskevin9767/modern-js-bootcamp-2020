//* Empty Object
const userReviews = {};
const shoppingList = {};

//* Adding a new property
userReviews['queenBee49'] = 8.0;
userReviews.mrSmith78 = 4.5;

console.log(userReviews); // { queenBee49: 8, mrSmith78: 4.5 }

shoppingList['milk'] = '2 %';
shoppingList.cheese = 'Cheddar';

console.log(shoppingList); // { milk: '2 %', cheese: 'Cheddar' }

//* Updating Existing Properties
userReviews['queenBee49'] += 2;
userReviews.mrSmith78++;

console.log(userReviews); // { queenBee49: 10, mrSmith78: 5.5 }

shoppingList['milk'] = 'Low Fat';
shoppingList.cheese = 'Swiss';

console.log(shoppingList); // { milk: 'Low Fat', cheese: 'Swiss' }
