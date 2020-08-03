const cephalopods = [
  'dumbo octopus',
  'humboldt squid',
  'flamboyant cuttlefish',
];

const gastropods = ['giant african snail', 'banana slug', 'variable neon slug'];
const cnidaria = ['fire coral', 'moon jelly'];

//* Spread copies the arrays
const mollusca = [...cephalopods, ...gastropods];

console.log(mollusca);
// ["dumbo octopus", "humboldt squid", "flamboyant cuttlefish", "giant african snail", "banana slug", "variable neon slug"]

//* Spread copies the arrays
const inverts = [...cnidaria, ...gastropods, ...cephalopods];

console.log(inverts);
// ["fire coral", "moon jelly", "giant african snail", "banana slug",
// "variable neon slug", "dumbo octopus", "humboldt squid", "flamboyant cuttlefish"]

//* Spread copies the array
const cephCopy = [...cephalopods];

console.log(cephCopy);
// ["dumbo octopus", "humboldt squid", "flamboyant cuttlefish"]
