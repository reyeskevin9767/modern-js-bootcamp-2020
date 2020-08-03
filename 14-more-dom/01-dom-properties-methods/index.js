//* InnerText
const h1 = document.querySelector('h1');

console.log(h1.innerText);

h1.innerText = 'I am hungry';

//* textContent
const main = document.querySelector('#main');

console.log(main.textContent);

//* innerHTML
const form = document.querySelector('form');

form.innerHTML = '<b>I love work</b>';
