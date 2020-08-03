// Write a isValidPassword function
// It accepts 2 arguments: password and username
// Password must:
//	- be at least 8 characters
//  - cannot contain spaces
//  - cannot contain the username
// If all requirements are met, return true.
// Otherwise: false

// isValidPassword('89Fjj1nms', 'dogLuvr');  // true
// isValidPassword('dogLuvr123!', 'dogLuvr') // false
// isValidPassword('hello1', 'dogLuvr') // false

//* My Solution
//* Function checks to see if password is valid
function isValidPassword(password, username) {
  if (password.length >= 8) {
    if (password.indexOf(' ') === -1 && password.indexOf(username) === -1) {
      return true;
    }
  }
  return false;
}

isValidPassword('89Fjj1nms', 'dogLuvr'); // true
isValidPassword('89Fj j1nms', 'dogLuvr'); // false

//* Short Version #1
function isValidPasswordTwo(password, username) {
  if (password.length < 8) {
    return false;
  }
  if (password.indexOf(' ') !== -1) {
    return false;
  }
  if (password.indexOf(username) !== -1) {
    return false;
  }
  return true;
}

console.log(isValidPasswordTwo('efewfewf434', 'dogLuvr')); // true
console.log(isValidPasswordTwo('89Fjfddfdsj1nms', 'j1nms')); // false

//* Short Version #2
function isValidPasswordThree(password, username) {
  if (
    password.length < 8 ||
    password.indexOf(' ') !== -1 ||
    password.indexOf(username) !== -1
  ) {
    return false;
  }
  return true;
}

console.log(isValidPasswordThree('e2efd23dfd', 'ddfadsf')); // true
console.log(isValidPasswordThree('89Fjfd d1nms', 'j1nms')); // false

//* Short Version #3
function isValidPasswordFour(password, username) {
  const tooShort = password.length < 8;
  const hasSpace = password.indexOf(' ') !== -1;
  const tooSimilar = password.indexOf(username) !== -1;
  if (tooShort || hasSpace || tooSimilar) return false;
  return true;
}

console.log(isValidPasswordFour('LoveWinder', 'colllerer')); // true
console.log(isValidPasswordFour('adsf4434fdfe', 'ads')); // false

//* Short Version #4
function isValidPasswordFive(password, username) {
  const tooShort = password.length < 8;
  const hasSpace = password.indexOf(' ') !== -1;
  const tooSimilar = password.indexOf(username) !== -1;
  if (!tooShort && !hasSpace && !tooSimilar) return true;
  return false;
}

console.log(isValidPasswordFive('LoveWinderds', 'colllefdf')); // true
console.log(isValidPasswordFive('adsdvdaa3 4fdfe', 'adsdfs')); // false

//* Short Version #5
function isValidPasswordSix(password, username) {
  const tooShort = password.length < 8;
  const hasSpace = password.indexOf(' ') !== -1;
  const tooSimilar = password.indexOf(username) !== -1;
  return !tooShort && !hasSpace && !tooSimilar;
}

console.log(isValidPasswordSix('Lds323oveWinderds', 'ccdcsgfh')); // true
console.log(isValidPasswordSix('adsdvLove4fdfe', 'Love')); // false
