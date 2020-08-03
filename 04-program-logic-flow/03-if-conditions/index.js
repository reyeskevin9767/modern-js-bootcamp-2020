//* If Condition
let rating = 3;

//* Check to see if ratingThree is 3
if (rating === 3) {
  console.log('You Are A SuperStar!');
}

//* Else If Conditional
let ratingTwo = 1;

if (ratingTwo === 3) {
  console.log('You Are A Superstar!');
} else if (ratingTwo === 2) {
  console.log('Meet Expectations');
} else if (ratingTwo === 1) {
  console.log('Needs Improvement');
}

//* Else Conditional
let ratingThree = -99;

//* Check to see if ratingThree is 3
if (ratingThree === 3) {
  console.log('You Are A Superstar!');
} else if (ratingThree === 2) {
  console.log('Meet Expectations');
} else if (ratingThree === 1) {
  console.log('Needs Improvement');
} else {
  console.log('Invalid Rating');
}

//* Nesting Conditions
let password = 'cat dog';

//* Check to see if ratingThree is 3
if (password.length >= 6) {
  if (password.indexOf(' ') !== -1) {
    console.log('Password cannot include spaces');
  } else {
    console.log('Valid password!!');
  }
} else {
  console.log('Password too short!');
}
