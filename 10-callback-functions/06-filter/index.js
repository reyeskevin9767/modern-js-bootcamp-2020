const nums = [34, 35, 67, 54, 109, 102, 32, 9];

//* Filters through array to find odd
const odd = nums.filter((n) => n % 2 === 1);

console.log(odd); // [ 35, 67, 109, 9 ]

//* Filters through array to find even
const evens = nums.filter((n) => n % 2 === 0);

console.log(evens); // [ 34, 54, 102, 32 ]

//* Filters through array to find number greater than 50
const bigNums = nums.filter((n) => n > 50);

console.log(bigNums); // [ 67, 54, 109, 102 ]

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

//* Filters through array to find ratings higher than 4.3
const goodBooks = books.filter((b) => b.rating >= 4.3);

console.log(goodBooks);

// Results
// [
//     {
//       title: 'Bone: The Complete Edition',
//       authors: [ 'Jeff Smith' ],
//       rating: 4.42,
//       genres: [ 'fiction', 'graphic novel', 'fantasy' ]
//     },
//     {
//       title: 'A Gentleman in Moscow',
//       authors: [ 'Amor Towles' ],
//       rating: 4.36,
//       genres: [ 'fiction', 'historical fiction' ]
//     },
//     {
//       title: 'The Name of the Wind',
//       authors: [ 'Patrick Rothfuss' ],
//       rating: 4.54,
//       genres: [ 'fiction', 'fantasy' ]
//     },
//     {
//       title: 'The Way of Kings',
//       authors: [ 'Brandon Sanderson' ],
//       rating: 4.65,
//       genres: [ 'fantasy', 'epic' ]
//     }
//   ]

//* Filters through array to find books with genres of fantasy
const fantasyBooks = books.filter((b) => b.genres.includes('fantasy'));

console.log(fantasyBooks);

// Results
// [
//     {
//       title: 'Good Omens',
//       authors: [ 'Terry Pratchett', 'Neil Gaiman' ],
//       rating: 4.25,
//       genres: [ 'fiction', 'fantasy' ]
//     },
//     {
//       title: 'Bone: The Complete Edition',
//       authors: [ 'Jeff Smith' ],
//       rating: 4.42,
//       genres: [ 'fiction', 'graphic novel', 'fantasy' ]
//     },
//     {
//       title: 'American Gods',
//       authors: [ 'Neil Gaiman' ],
//       rating: 4.11,
//       genres: [ 'fiction', 'fantasy' ]
//     },
//     {
//       title: 'The Name of the Wind',
//       authors: [ 'Patrick Rothfuss' ],
//       rating: 4.54,
//       genres: [ 'fiction', 'fantasy' ]
//     },
//     {
//       title: 'The Way of Kings',
//       authors: [ 'Brandon Sanderson' ],
//       rating: 4.65,
//       genres: [ 'fantasy', 'epic' ]
//     }
//   ]

//* Filters through array to find books with genres short stories or essays
const shortForm = books.filter(
  (b) => b.genres.includes('short stories') || b.genres.includes('essays')
);

console.log(shortForm);

// Results
// [
//     {
//       title: 'Changing My Mind',
//       authors: [ 'Zadie Smith' ],
//       rating: 3.83,
//       genres: [ 'nonfiction', 'essays' ]
//     },
//     {
//       title: 'The Overstory',
//       authors: [ 'Richard Powers' ],
//       rating: 4.19,
//       genres: [ 'fiction', 'short stories' ]
//     }
//   ]

const query = 'The';

//* Filters through array to find books titles
const results = books.filter((book) => {
  const title = book.title.toLowerCase();
  return title.includes(query.toLowerCase());
});

console.log(results);

// Results
// [
//     {
//       title: 'Bone: The Complete Edition',
//       authors: [ 'Jeff Smith' ],
//       rating: 4.42,
//       genres: [ 'fiction', 'graphic novel', 'fantasy' ]
//     },
//     {
//       title: 'The Name of the Wind',
//       authors: [ 'Patrick Rothfuss' ],
//       rating: 4.54,
//       genres: [ 'fiction', 'fantasy' ]
//     },
//     {
//       title: 'The Overstory',
//       authors: [ 'Richard Powers' ],
//       rating: 4.19,
//       genres: [ 'fiction', 'short stories' ]
//     },
//     {
//       title: 'The Way of Kings',
//       authors: [ 'Brandon Sanderson' ],
//       rating: 4.65,
//       genres: [ 'fantasy', 'epic' ]
//     },
//     {
//       title: 'Lord of the flies',
//       authors: [ 'William Golding' ],
//       rating: 3.67,
//       genres: [ 'fiction' ]
//     }
//   ]
