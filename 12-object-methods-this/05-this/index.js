function sayHi() {
  console.log('Hi');

  //* this refers to the window (global scope object in the browser)
  console.log(this);
}

/* -------------------------------------------------------------------------- */

const person = {
  first: 'Cherilyn',
  last: 'Sarkisian',
  nickName: 'Cher',
  fullName() {
    //* In a method, this refers to the object the method "lives" in
    const { first, last, nickName } = this;
    return `${first} ${last} AKA ${nickName}`;
  },
  printBio() {
    const fullName = this.fullName();
    console.log(`${fullName} is a person!`);
  },
};

person.printBio(); // Cherilyn Sarkisian AKA Cher is a person!
