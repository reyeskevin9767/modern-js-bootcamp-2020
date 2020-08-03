function outer() {
  let movie = 'Amadeus';

  function inner() {
    //* With Lexical Scope, the function will search upper levels to find variable
    function extraInner() {
      console.log(movie); // Amadeus
    }
    extraInner();
  }
  inner();
}

outer();
