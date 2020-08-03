//* Value
const inputs = document.querySelectorAll('input');

console.log(inputs);

inputs[0].value = 'Taco';

console.log(inputs[0].value);

//* Href
const a = document.querySelector('a');

console.log(a);

a.href = 'http://google.com';

//* Src
const img = document.querySelector('img');

console.log(img);

img.src =
  'https://images.unsplash.com/photo-1579064361094-95f8d1cedfae?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80';
