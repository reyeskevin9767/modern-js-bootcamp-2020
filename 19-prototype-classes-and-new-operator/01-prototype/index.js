//* Prototype
String.prototype.yell = function () {
  return `OMG !!! ${this.toUpperCase()} AGAGAGAH!`;
};

console.log('boom'.yell());

//* Prototype
Array.prototype.pop = function () {
  return 'Sorry, I want that element, I will never pop it off';
};

console.log([1, 2, 3].pop());
