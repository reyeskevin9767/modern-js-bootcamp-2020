//* Find the Largest Number Between Two Numbers
function findLargest(x, y) {
  if (x > y) {
    console.log(`${x} is larger!`);
  } else if (x < y) {
    console.log(`${y} is larger!`);
  } else {
    console.log(`${x} and ${y} are equal!`);
  }
}

findLargest(4, 5); // 5 is larger!
findLargest(10, 10); // 10 and 10 are equal!
findLargest(6, 3); // 6 is larger!
