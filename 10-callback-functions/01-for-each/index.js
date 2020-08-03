const numbers = [20, 21, 22, 23, 24, 25, 26, 27];

//* Using anonymous function expression for 'For Each' loop
numbers.forEach(function (num) {
  console.log(num * 2);
});

// Results
// 40
// 42
// 44
// 46
// 48
// 50
// 52
// 54
// 60
// 63
// 66
// 69
// 72
// 75
// 78
// 81

//* Function multiplies argument by 3
function printTriple(n) {
  console.log(n * 3);
}

//* Using a pre-defined function
numbers.forEach(printTriple);

// Results
// 0 20
// 1 21
// 2 22
// 3 23
// 4 24
// 5 25
// 6 26
// 7 27

//* For Each Can Access The Index
numbers.forEach(function (num, idx) {
  console.log(idx, num);
});

const books = [
  {
    title: 'Good Omens',
    authors: ['Terry Pratchett', 'Neil Gaiman'],
    rating: 4.25,
  },
  {
    title: 'Bone: The Complete Edition',
    authors: ['Jeff Smith'],
    rating: 4.42,
  },
  {
    title: 'American Gods',
    authors: ['Neil Gaiman'],
    rating: 4.11,
  },
  {
    title: 'A Gentleman in Moscow',
    authors: ['Amor Towles'],
    rating: 4.36,
  },
];

//* Printing all book titles using forEach
books.forEach(function (book) {
  console.log(book.title.toUpperCase());
});

// Results
// GOOD OMENS
// BONE: THE COMPLETE EDITION
// AMERICAN GODS
// A GENTLEMAN IN MOSCOW

//* Printing all book titles using for...of loop
for (let book of books) {
  console.log(book.title.toUpperCase());
}

// Results
// GOOD OMENS
// BONE: THE COMPLETE EDITION
// AMERICAN GODS
// A GENTLEMAN IN MOSCOW

//* Printing all book titles using for loop
for (let i = 0; i < books.length; i++) {
  console.log(books[i].title.toLowerCase());
}

// Results
// good omens
// bone: the complete edition
// american gods
// a gentleman in moscow
