//* A pangram is a sentence that contains every letter of the alphabet, like:
//* "The quick brown fox jumps over the lazy dog"

//* Write a function called isPangram, which checks to see if a given sentence contains every letter of the alphabet.
//* Make sure you igore string casing!

//* isPangram('The five boxing wizards jump quickly') //true
//* isPangram('The five boxing wizards jump quick') //false

//* My Solution
function isPangram(str) {
  let alphabet = 'abcdefghiklmnopqrstuvwyz';
  let lowerCased = str.toLowerCase();

  for (alp of alphabet) {
    if (lowerCased.indexOf(alp) === -1) {
      return false;
    }
  }
  return true;
}

console.log(isPangram('The five boxing wizards jump quickly'));
console.log(isPangram('The five boxing wizards jump quick'));

/* -------------------------------------------------------------------------- */

//* Version 1
function isPangramTwo(sentence) {
  let lowerCased = sentence.toLowerCase();
  for (let char of 'abcdefghiklmnopqrstuvwxyz') {
    if (lowerCased.indexOf(char) === -1) {
      return false;
    }
  }
  return true;
}

console.log(isPangramTwo('The five boxing wizards jump quickly'));
console.log(isPangramTwo('The five boxing wizards jump quick'));

/* -------------------------------------------------------------------------- */

//* Version2 using string.includes()
function isPangramThree(sentence) {
  let lowerCased = sentence.toLowerCase();
  for (let char of 'abcdefghiklmnopqrstuvwxyz') {
    if (!lowerCased.includes(char)) {
      return false;
    }
  }
  return true;
}

console.log(isPangramThree('The five boxing wizards jump quickly'));
console.log(isPangramThree('The five boxing wizards jump quick'));
