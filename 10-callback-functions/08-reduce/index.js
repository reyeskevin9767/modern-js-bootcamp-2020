const nums = [3, 4, 5, 6, 7];

//* Function sums up all the values
const product = nums.reduce((total, currentVal) => {
  return total * currentVal;
});

console.log(product); // 2520

//* Function sums up all the values but starts at 100
const productTwo = nums.reduce((total, currentVal) => {
  return total * currentVal;
}, 100);

console.log(productTwo); // 252000

const grades = [87, 64, 96, 92, 88, 99, 73, 70, 64];

//* Function finds the highest number in array
const maxGrade = grades.reduce((max, currVal) => {
  if (currVal > max) return currVal;
  return max;
});

console.log(maxGrade); // 99

//* Shorter Version
const maxGradeTwo = grades.reduce((max, currVal) => {
  return Math.max(max, currVal);
});

console.log(maxGradeTwo); // 99

//* Function finds the min number
const minGrade = grades.reduce((min, currVal) => Math.min(min, currVal));

console.log(minGrade); // 64

// max     currVal    return
// 87        64         87
// 87        96         96
// 96        92         96
// etc.

//* We can specify an initial value as the 2nd argument to reduce:
//* arr.reduce(reducerFunction, initialValue)
const total = [10, 20, 30, 40, 50].reduce((sum, currVal) => {
  return sum + currVal;
}, 1000); // Sum starts at 1000

console.log(total); // 1150

const votes = ['y', 'y', 'n', 'y', 'n', 'y', 'n', 'y', 'n', 'n', 'n', 'y', 'y'];

//* Function tallies up values in object
const result = votes.reduce((tally, val) => {
  if (tally[val]) {
    tally[val]++;
  } else {
    tally[val] = 1;
  }
  return tally;
}, {});

console.log(result); // { y: 7, n: 6 }

//* Shorter version
const resultTwo = votes.reduce((tally, currVal) => {
  tally[currVal] = (tally[currVal] || 0) + 1;
  return tally;
}, {});

console.log(resultTwo); // { y: 7, n: 6 }

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
    title: 'A Truly Horrible Book',
    authors: ['Xavier Time'],
    rating: 2.18,
    genres: ['fiction', 'garbage'],
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

// Group the books by ratings
const groupByRating = books.reduce((groupedBooks, book) => {
  const key = Math.floor(book.rating);

  if (!groupedBooks[key]) groupedBooks[key] = [];
  groupedBooks[key].push(book);
  return groupedBooks;
}, {});

console.log(groupByRating);

// {
//     '2': [
//       {
//         title: 'A Truly Horrible Book',
//         authors: [Array],
//         rating: 2.18,
//         genres: [Array]
//       }
//     ],
//     '3': [
//       {
//         title: 'Changing My Mind',
//         authors: [Array],
//         rating: 3.83,
//         genres: [Array]
//       },
//       {
//         title: 'Lord of the flies',
//         authors: [Array],
//         rating: 3.67,
//         genres: [Array]
//       }
//     ],
//     '4': [
//       {
//         title: 'Good Omens',
//         authors: [Array],
//         rating: 4.25,
//         genres: [Array]
//       },
//       {
//         title: 'Bone: The Complete Edition',
//         authors: [Array],
//         rating: 4.42,
//         genres: [Array]
//       },
//       {
//         title: 'American Gods',
//         authors: [Array],
//         rating: 4.11,
//         genres: [Array]
//       },
//       {
//         title: 'A Gentleman in Moscow',
//         authors: [Array],
//         rating: 4.36,
//         genres: [Array]
//       },
//       {
//         title: 'The Name of the Wind',
//         authors: [Array],
//         rating: 4.54,
//         genres: [Array]
//       },
//       {
//         title: 'The Overstory',
//         authors: [Array],
//         rating: 4.19,
//         genres: [Array]
//       },
//       {
//         title: 'The Way of Kings',
//         authors: [Array],
//         rating: 4.65,
//         genres: [Array]
//       }
//     ]
//   }
