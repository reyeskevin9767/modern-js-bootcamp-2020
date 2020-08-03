const subreddits = ['soccer', 'popheads', 'cringe', 'books'];
const books = ['Big World', 'Bigger World', 'Small World'];

//* Standard For Loop
for (let i = 0; i < subreddits.length; i++) {
  console.log(subreddits[i]);
}

// Results
// soccer
// popheads
// cringe
// books

for (let i = 0; i < books.length; i++) {
  console.log(books[i]);
}

// Results
// Big World
// Bigger World
// Small World

//* A For...Of Loop
for (let sub of subreddits) {
  console.log(sub);
}

// Results
// Big World
// Bigger World
// Small World

for (let book of books) {
  console.log(book);
}

// Results
// Big World
// Bigger World
// Small World

//* Strings With For...Of Loop
for (let char of 'hello') {
  console.log(char.toUpperCase());
}

// Results
// H
// E
// L
// L
// O

for (let char of "DIDN'T WORK") {
  console.log(char.toLowerCase());
}

// Results
// d
// i
// d
// n
// '
//
// w
// o
// r
// k
