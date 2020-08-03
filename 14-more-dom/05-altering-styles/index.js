//* Altering Styles
const h1 = document.querySelector('h1');

console.log(h1.style);

h1.style.backgroundColor = 'red';

//* Altering Styles
const allLis = document.querySelectorAll('li');
const colors = ['red', 'orange', 'green', 'blue', 'pruple', 'yellow'];

allLis.forEach((li, i) => {
  const color = colors[i];
  li.style.color = color;
});
