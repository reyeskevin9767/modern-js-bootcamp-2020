//* These variables are scoped to the randValues function
function randValues() {
  let person = 'Tom';
  const age = 45;
  var color = 'teal';

  console.log(age); // 45
  console.log(person); // Tom
  console.log(color); // teal
}

//* These variables are scoped to the changeColor function
function changeColor() {
  let color = 'purple';
  const age = 19;

  console.log(age); // 19
  console.log(color); // purple
}

randValues();
changeColor();
//  age - Do Not Exist Outside Scope
//  color - Do Not Exist Outside Scope
//  person - Do Not Exist Outside Scope
