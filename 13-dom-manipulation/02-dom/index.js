//* Get element by id
const img = document.getElementById('bear-photo');

console.log(img);

//* Get element by tag name
const inputs = document.getElementsByTagName('input');

console.log(inputs);

//* Get element by class
const special = document.getElementsByClassName('special');

console.log(special);

//* Select element of tag
const header = document.querySelector('h1');

console.log(header);

//* Select element of id
const body = document.querySelector('#main');

console.log(body);

//* Select element of class
const findClass = document.querySelector('.special');

console.log(findClass);

//* Select element of class special in child il of ul
const specialTwo = document.querySelector('ul li.special');

console.log(specialTwo);

//* Select all elements of id special
const findAllSpecial = document.querySelectorAll('.special');

console.log(findAllSpecial);
