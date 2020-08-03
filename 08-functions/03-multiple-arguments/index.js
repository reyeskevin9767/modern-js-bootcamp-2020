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

findLargest(4, 5);
findLargest(10, 10);
findLargest(6, 3);
