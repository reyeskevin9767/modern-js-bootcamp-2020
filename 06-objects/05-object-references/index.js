const palette = {
  red: '#eb4d4b',
  yellow: '#f9ca24',
  blue: '#30336b',
};

//* Objects are reference types
const palette2 = palette;
palette.green = '#ebf876';

//* Both variables reflect that change
console.log(palette);
console.log(palette2);
