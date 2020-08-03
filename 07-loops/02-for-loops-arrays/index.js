//* Loop Through Array
const examScores = [98, 77, 84, 91, 57, 66];

for (let i = 0; i < examScores.length; i++) {
  console.log(i, examScores[i]);
  // 0 98
  // 1 77
  // 2 84
  // 3 91
  // 4 57
  // 5 66
}

//* Loop Through Array With Objects
const myStudents = [
  {
    firstName: 'Zeus',
    grade: 86,
  },
  {
    firstName: 'Artemis',
    grade: 97,
  },
  {
    firstName: 'Hera',
    grade: 72,
  },
  {
    firstName: 'Apollo',
    grade: 90,
  },
];

//* Find Each Student's Grade
for (let i = 0; i < myStudents.length; i++) {
  let student = myStudents[i];
  console.log(`${student.firstName} scored ${student.grade}`);
  // Zeus scored 86
  // Artemis scored 97
  // Hera scored 72
  // Apollo scored 90
}

//* Averaging All Of The Grades
let total = 0;
let totalLength = myStudents.length;

for (let i = 0; i < totalLength; i++) {
  let student = myStudents[i];
  total += student.grade;
}

console.log(total); // 345
console.log(totalLength); // 4
console.log(total / totalLength); // 86.25

//* Reverse String
const word = 'stressed';
let reversedWord = '';
let wordLength = word.length - 1;

for (let i = wordLength; i >= 0; i--) {
  reversedword += word[i];
}

console.log(reversedword);
// d
// de
// des
// dess
// desse
// desser
// dessert
// desserts
