//* Empty Object
const userReviews = {};
const shoppingList = {};

//* Adding a new property
userReviews['queenBee49'] = 8.0;
userReviews.mrSmith78 = 4.5;

console.log(userReviews);

shoppingList['milk'] = '2 %';
shoppingList.cheese = 'Cheddar';

console.log(shoppingList);

//* Updating Existing Properties
userReviews['queenBee49'] += 2;
userReviews.mrSmith78++;

console.log(userReviews);

shoppingList['milk'] = 'Low Fat';
shoppingList.cheese = 'Swiss';

console.log(shoppingList);
