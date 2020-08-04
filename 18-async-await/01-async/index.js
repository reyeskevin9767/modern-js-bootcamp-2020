//* Async Function
async function add(x, y) {
  if (typeof x !== 'number' || typeof y !== 'number') {
    throw 'X and Y must be numbers';
  }
  return x + y;
}

//* Function with Promise
// function add(x, y) {
//   return new Promise((resolve, reject) => {
//     if (typeof x !== 'number' || typeof y !== 'number') {
//       reject('X and Y must be numbers');
//     }
//     resolve(x + y);
//   });
// }

//* Async and Promise can both use then and catch
add('e', 'r')
  .then((val) => {
    console.log('Promise Resolved with , ', val);
  })
  .catch((err) => {
    console.log('Promise Rejected with , ', err);
  });
