let dishesToDo = ['large platter'];

//* Unshift - Adds To The Start
dishesToDo.unshift('plate');
console.log(dishesToDo); // [ 'plate', 'large platter' ]

dishesToDo.unshift('cereal bowl');
console.log(dishesToDo); // [ 'cereal bowl', 'plate', 'large platter' ]

dishesToDo.unshift('spoon');
console.log(dishesToDo); // [ 'spoon', 'cereal bowl', 'plate', 'large platter' ]

//* Shift - Remove From The Start
dishesToDo.shift();
console.log(dishesToDo); // [ 'cereal bowl', 'plate', 'large platter' ]

dishesToDo.shift();
console.log(dishesToDo); // [ 'plate', 'large platter' ]

dishesToDo.shift();
console.log(dishesToDo); // [ 'large platter' ]
