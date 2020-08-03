const palette = {
  red: '#eb4d4b',
  yellow: '#f9ca24',
  blue: '#30336b',
};

//* Objects are reference types
const palette2 = palette;
palette.green = '#ebf876';

//* Both variables reflect that change
console.log(palette); // {red: '#eb4d4b',yellow: '#f9ca24',blue: '#30336b',green: '#ebf876'}
console.log(palette2); // {red: '#eb4d4b',yellow: '#f9ca24',blue: '#30336b',green: '#ebf876'}
