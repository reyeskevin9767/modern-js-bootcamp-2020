//* Repeat a string multiple times
const repeat = (str, times) => {
  let result = '';
  for (let i = 0; i < times; i++) {
    result += str;
  }
  return result;
};

//* Add exclamation marks to string
const scream = (str) => {
  return str.toUpperCase() + '!!!';
};

//* Take a phrase, call scream and repeat, return result
const getRantText = (phrase) => {
  let text = scream(phrase);
  let rant = repeat(text, 8);
  return rant;
};

//* Take a phrase and element, call getRantText, and append to el
const makeRant = (phrase, el) => {
  const h1 = document.createElement('h1');
  h1.innerText = getRantText(phrase);
  el.appendChild(h1);
};
console.log('HELLO!');

makeRant('I hate mayonnaise', document.body);
// makeRant('if you have to cough, please cover your mouth', document.body);
