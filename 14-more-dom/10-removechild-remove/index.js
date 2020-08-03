//* Remove Child
const ul = document.querySelector('section ul');

const removeMe = ul.querySelector('.special');

const deleted = ul.removeChild(removeMe);

//* Remove
const h1 = document.querySelector('h1');
h1.remove()