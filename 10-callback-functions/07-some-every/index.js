const words = ['dog', 'dig', 'log', 'bag', 'wag'];

//* Check if every word has a character length of 3
const all3Letters = words.every((word) => word.length === 3);

console.log(all3Letters); // true

//* Check if every word ends with a 'g'
const allEngInG = words.every((word) => {
  const last = word.length - 1;
  return word[last] === 'g';
});

console.log(allEngInG); // true

//* Check if some words has the character 'd'
const someStartWithD = words.some((word) => word[0] === 'd');

console.log(someStartWithD); // true

//* Check if every words has the character 'd'
const allStartWithD = words.every((word) => word[0] === 'd');

console.log(allStartWithD); // false

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

//* Check if every book has a rating higher than 3.5
const allGoodBooks = books.every((book) => book.rating > 3.5);

console.log(allGoodBooks); // true

//* Check if some books have a rating higher than 2
const any2Authors = books.some((book) => book.authors.length === 2);

console.log(any2Authors); // true
