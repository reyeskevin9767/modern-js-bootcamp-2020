//* Write a function to find the average value in an array of numbers
//* avg([0,50]) //25
//* avg([75,76,80,95,100]) //85.2

const nums = [34, 43, 43, 56, 78, 90, 87, 3, 4, 56];

//* My Solution
function findAvg(arr) {
  let total = 0;
  let average = 0;

  for (let num of arr) {
    total += num;
    average = total / arr.length;
  }
  return average;
}

console.log(findAvg(nums));

//* Solution #1
function avg(arr) {
  let total = 0;

  for (let num of arr) {
    total += num;
  }
  return total / arr.length;
}

console.log(avg(nums)); //49.4
