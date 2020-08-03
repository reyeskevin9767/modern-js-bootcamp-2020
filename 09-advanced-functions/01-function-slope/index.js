//* These variables are scoped to the randValues function
function randValues() {
  let person = 'Tom';
  const age = 45;
  var color = 'teal';

  console.log(age);
  console.log(person);
  console.log(color);
}

//* These variables are scoped to the changeColor function
function changeColor() {
  let color = 'purple';
  const age = 19;

  console.log(age);
  console.log(color);
}

randValues();
changeColor();
