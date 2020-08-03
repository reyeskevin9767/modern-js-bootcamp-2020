//* Function adds two numbers
function add(x, y) {
  return x + y;
  console.log('All Done'); //* Does Not Run
}

const sum = add(10, 16);
sum;

const answer = add(100, 200);
answer;

//* Example
const color = ['red', 'blue', 'yellow', 'orange', 'green'];

//* Function to find if the color purple is in array
function isPurple(color) {
  if (color.toLowerCase() === 'purple') {
    return true;
  } else {
    return false;
  }
}

console.log(isPurple('red'));

//* Shorten version since else is no longer need
function isPurpleTwo(color) {
  if (color.toLowerCase() === 'purple') {
    return true;
  }
  return false;
}

console.log(isPurpleTwo('purple'));

//* Shorter version where if is no longer need
function isPurpleThree(color) {
  return color.toLowerCase() === 'purple';
}

console.log(isPurpleThree('white'));

//* A Version that uses a for...of loop to find the colors purple/magenta
function containsPurple(arr) {
  for (let color of arr) {
    if (color === 'purple' || color === 'magenta') {
      return true;
    }
  }
  return false;
}

console.log(containsPurple(color));
