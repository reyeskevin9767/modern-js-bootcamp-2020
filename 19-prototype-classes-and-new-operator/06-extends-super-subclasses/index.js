//* Class
class Pet {
  constructor(name, age) {
    console.log('IN PET CONSTRUCTOR');
    this.name = name;
    this.age = age;
  }
  eat() {
    return `${this.name} is eating`;
  }
}

//* Extend
class Cat extends Pet {
  constructor(name, age, livesLeft = 9) {
    super(name, age);
    console.log('IN CAT CONSTRUCTOR');
    this.livesLeft = livesLeft;
  }
  meow() {
    return 'MEOWWW';
  }
}

//* Extend
class Dog extends Pet {
  bark() {
    return 'WOOF!!';
  }
  eat() {
    return `${this.name} scarfs his food!`;
  }
}

const monty = new Cat('monty', 9);
const wyatt = new Dog('wyatt', 3);
console.log(monty.eat());
console.log(wyatt.eat());
