const subreddits = ['soccer', 'popheads', 'cringe', 'books'];
const books = ['Big World', 'Bigger World', 'Small World'];

//* Standard For Loop
for (let i = 0; i < subreddits.length; i++) {
  console.log(subreddits[i]);
}

for (let i = 0; i < books.length; i++) {
  console.log(books[i]);
}

//* A For...Of Loop
for (let sub of subreddits) {
  console.log(sub);
}

for (let book of books) {
  console.log(book);
}

//* Strings With For...Of Loop
for (let char of 'hello') {
  console.log(char.toUpperCase());
}

for (let char of "DIDN'T WORK") {
  console.log(char.toLowerCase());
}
