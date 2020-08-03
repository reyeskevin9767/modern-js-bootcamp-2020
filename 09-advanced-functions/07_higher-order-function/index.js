//*Function accepts another function as an argument
function callThreeTimes(f) {
  f();
  f();
  f();
}

//* Function console.logs string
function cry() {
  console.log('I am sad');
}

callThreeTimes(cry);

// Results
// I am sad
// I am sad
// I am sad

//* More effective is to call function with for loop
function rage() {
  console.log('I HATE EVERYTHING!');
}

//* Function takes two arguments, a function and a number
//* Call func (a function), a num (number) of times
function repeatNTimes(func, num) {
  for (let i = 0; i < num; i++) {
    func();
  }
}

repeatNTimes(rage, 5);

// Results
// I HATE EVERYTHING!
// I HATE EVERYTHING!
// I HATE EVERYTHING!
// I HATE EVERYTHING!
// I HATE EVERYTHING!

//* Function console.logs string
const callMe = function () {
  console.log('Hi');
};

//* Function console.logs string
const stopCallingMe = function () {
  console.log('No');
};

//* Accepts 2 functions as arguments
function pickOne(f1, f2) {
  let rand = Math.random();

  if (rand < 0.5) {
    f1();
  } else {
    f2();
  }
}

pickOne(callMe, stopCallingMe);

// Result
// Hi
// No
