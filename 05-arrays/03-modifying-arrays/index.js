//* Modifying Arrays
let colors = ['red', 'orange', 'yellow', 'green'];

colors[2] = 'skyblue';
colors[4] = 'blue';
console.log(colors[2]); // skyblue
console.log(colors[4]); // blue
console.log(colors); // ['red', 'orange', 'skyblue', 'green', 'blue']

const lottoNums = [32, 43, 54, 21, 54, 21, 2, 5];

lottoNums[0] = 3;
lottoNums[8] = 66;
console.log(lottoNums[0]); // 3
console.log(lottoNums[8]); // 66
console.log(lottoNums); // [3, 43, 54, 21, 54, 21, 2, 5, 66]
