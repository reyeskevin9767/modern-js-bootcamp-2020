const jeopardyWinings = {
  regularPlay: 2454565,
  watsonChalleng: 435534534,
  tournamentOfChampions: 345345,
  battleOfTheDecades: 33454,
};

for (let prop in jeopardyWinings) {
  console.log(prop);
}

// Results
// regularPlay
// watsonChalleng
// tournamentOfChampions
// battleOfTheDecades

let total = 0;

for (let prop in jeopardyWinings) {
  total += jeopardyWinings[prop];
}

console.log(`${total}`); // 438367898

//* In Gives Back Indexes With Arrays and Strings
for (let k in [88, 99, 77, 66]) {
  console.log(k);
}

// Results
// 0
// 1
// 2
// 3

for (let str in 'Stressed In Logic') {
  console.log(str);
}

// Results
// 0
// 1
// 2
// 3
// 4
// 5
// 6
// 7
// 8
// 9
// 10
// 11
// 12
// 13
// 14
// 15
// 16
