const role = 'host';
const newperson = 'Jools Holland';

const roleTwo = 'Director';
const newpersonTwo = 'James Cameron';

// The old way:
// Make the object
// const team = {};
// Then add a property using dynamic key:
// team[role] = person;
// team[role2] = person2;

//* Computed Properties
const team = {
  [role]: newperson,
  [roleTwo]: newpersonTwo,
  [1 + 6 + 9]: 'sixteen',
};

function addProp(obj, k, v) {
  const copy = {
    ...obj,
  };
  copy[k] = v;
  return copy;
}

console.log(addProp(team, 'worker', 'DJ'));

// Results
// {
//     '16': 'sixteen',
//     host: 'Jools Holland',
//     Director: 'James Cameron',
//     worker: 'DJ'
// }

//* Computed Properties
const addPropTwo = (obj, k, v) => {
  return {
    ...obj,
    [k]: v,
  };
};

console.log(addPropTwo(team, 'Docter', 'John'));

// Results
// {
//     '16': 'sixteen',
//     host: 'Jools Holland',
//     Director: 'James Cameron',
//     Docter: 'John'
// }

//* Computed Properties
const addPropThree = (obj, k, v) => ({
  ...obj,
  [k]: v,
});

const res = addPropThree(team, 'happy', ':)');

console.log(res);

// Results
// {
//     '16': 'sixteen',
//     host: 'Jools Holland',
//     Director: 'James Cameron',
//     happy: ':)'
// }
