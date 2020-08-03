const prices = [400.5, 3000, 99.99, 35.99, 12.0, 9500];

//* Sort() Mutates The Original Array
//* Use the slice() to create a new copy,
//* otherwise we would be sorting the same array 3 times
//* Default string sort
const badSort = prices.slice().sort();

console.log(badSort); // [ 12, 3000, 35.99, 400.5, 9500, 99.99 ]

//* Ascending Sort
const ascSort = prices.slice().sort((a, b) => a - b);

console.log(ascSort); // [ 12, 35.99, 99.99, 400.5, 3000, 9500 ]

//* Descending Sort
const descSort = prices.slice().sort((a, b) => b - a);

console.log(descSort); // [ 9500, 3000, 400.5, 99.99, 35.99, 12 ]

const books = [
  {
    title: 'Good Omens',
    authors: ['Terry Pratchett', 'Neil Gaiman'],
    rating: 4.25,
    genres: ['fiction', 'fantasy'],
  },
  {
    title: 'Changing My Mind',
    authors: ['Zadie Smith'],
    rating: 3.83,
    genres: ['nonfiction', 'essays'],
  },
  {
    title: 'Bone: The Complete Edition',
    authors: ['Jeff Smith'],
    rating: 4.42,
    genres: ['fiction', 'graphic novel', 'fantasy'],
  },
  {
    title: 'American Gods',
    authors: ['Neil Gaiman'],
    rating: 4.11,
    genres: ['fiction', 'fantasy'],
  },
  {
    title: 'A Gentleman in Moscow',
    authors: ['Amor Towles'],
    rating: 4.36,
    genres: ['fiction', 'historical fiction'],
  },
  {
    title: 'The Name of the Wind',
    authors: ['Patrick Rothfuss'],
    rating: 4.54,
    genres: ['fiction', 'fantasy'],
  },
  {
    title: 'The Overstory',
    authors: ['Richard Powers'],
    rating: 4.19,
    genres: ['fiction', 'short stories'],
  },
  {
    title: 'The Way of Kings',
    authors: ['Brandon Sanderson'],
    rating: 4.65,
    genres: ['fantasy', 'epic'],
  },
  {
    title: 'Lord of the flies',
    authors: ['William Golding'],
    rating: 3.67,
    genres: ['fiction'],
  },
];

//* Sorting books by their rating
console.log(books.sort((a, b) => a.rating - b.rating));

// [
//   {
//     title: 'Lord of the flies',
//     authors: [ 'William Golding' ],
//     rating: 3.67,
//     genres: [ 'fiction' ]
//   },
//   {
//     title: 'Changing My Mind',
//     authors: [ 'Zadie Smith' ],
//     rating: 3.83,
//     genres: [ 'nonfiction', 'essays' ]
//   },
//   {
//     title: 'American Gods',
//     authors: [ 'Neil Gaiman' ],
//     rating: 4.11,
//     genres: [ 'fiction', 'fantasy' ]
//   },
//   {
//     title: 'The Overstory',
//     authors: [ 'Richard Powers' ],
//     rating: 4.19,
//     genres: [ 'fiction', 'short stories' ]
//   },
//   {
//     title: 'Good Omens',
//     authors: [ 'Terry Pratchett', 'Neil Gaiman' ],
//     rating: 4.25,
//     genres: [ 'fiction', 'fantasy' ]
//   },
//   {
//     title: 'A Gentleman in Moscow',
//     authors: [ 'Amor Towles' ],
//     rating: 4.36,
//     genres: [ 'fiction', 'historical fiction' ]
//   },
//   {
//     title: 'Bone: The Complete Edition',
//     authors: [ 'Jeff Smith' ],
//     rating: 4.42,
//     genres: [ 'fiction', 'graphic novel', 'fantasy' ]
//   },
//   {
//     title: 'The Name of the Wind',
//     authors: [ 'Patrick Rothfuss' ],
//     rating: 4.54,
//     genres: [ 'fiction', 'fantasy' ]
//   },
//   {
//     title: 'The Way of Kings',
//     authors: [ 'Brandon Sanderson' ],
//     rating: 4.65,
//     genres: [ 'fantasy', 'epic' ]
//   }
// ]
