//* Array & Objects
const student = {
  firstName: 'David',
  lastName: 'Jones',
  strengths: ['Music', 'Art'],
  exams: {
    midterm: 92,
    final: 88,
  },
};

let studentName = student.firstName;
let midtermGrade = student.exams.midterm;
let finalGrade = student.exams.final;

console.log(midtermGrade);
console.log(finalGrade);

const avg = (midtermGrade + finalGrade) / 2;
console.log(avg); //90

console.log(`${studentName} average grade is ${avg}`);

const shoppingCart = [
  {
    product: 'Jenga Classic',
    price: 6.88,
    quantity: 1,
  },
  {
    product: 'Echo Dot',
    price: 29.99,
    quantity: 3,
  },
  {
    product: 'Fire Stick',
    price: 39.99,
    quantity: 2,
  },
];

let productName = shoppingCart[0].product;
let priceNum = shoppingCart[0].price;
let quantityNum = shoppingCart[0].quantity;

console.log(productName);
console.log(priceNum);
console.log(quantityNum);

console.log(`${productName} is ${priceNum} with ${quantityNum} left`);
