//* Find Parent
const firstLI = document.querySelector('li');

console.log(firstLI.parentElement);

//* Find Child
const ul = document.querySelector('ul');

console.log(ul.children);

//* Find Next Element Sibling
console.log(firstLI.nextElementSibling);

//* Find Next Element Sibling after the Next Element Sibling
const thirdLI = firstLI.nextElementSibling.nextElementSibling;

//* Find Previous Element Sibling
console.log(thirdLI.previousElementSibling);
