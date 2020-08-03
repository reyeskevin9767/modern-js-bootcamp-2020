//* Accessing Objects Data
const palette = {
  red: '#eb4d4b',
  yellow: '#f9ca24',
  blue: '#30336b',
};

//* Dot Notation
let red = palette.red;
console.log(red); // #eb4d4b

//* Square Bracket Notation
let yellow = palette['yellow'];
console.log(yellow); // #f9ca24

//* Square Brackets With Dynamic Key Names
let mysteryColor = 'blue';
let blue = palette[mysteryColor];
console.log(blue); // #30336b
