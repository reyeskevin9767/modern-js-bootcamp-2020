const jeopardyWinings = {
  regularPlay: 2454565,
  watsonChalleng: 435534534,
  tournamentOfChampions: 345345,
  battleOfTheDecades: 33454,
};

for (let prop in jeopardyWinings) {
  console.log(prop);
}

let total = 0;

for (let prop in jeopardyWinings) {
  total += jeopardyWinings[prop];
}

console.log(`${total}`);

//* In Gives Back Indexes With Arrays and Strings
for (let k in [88, 99, 77, 66]) {
  console.log(k);
}

for (let str in 'Stressed In Logic') {
  console.log(str);
}
