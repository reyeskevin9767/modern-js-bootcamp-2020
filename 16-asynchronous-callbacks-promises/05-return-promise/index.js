// const willGetYouADog = new Promise((resolve, reject) => {
//     const rand = Math.random();
//     if (rand < 0.5) {
//         resolve();
//     } else {
//         reject();
//     }
// });

// willGetYouADog.then(() => {
//     console.log('YAY WE GOT A DOG!!!');
// });

// willGetYouADog.catch(() => {
//     console.log('NO DOG');
// });

//* New Promise with timeout
const makeDogPromise = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const rand = Math.random();
      if (rand < 0.5) {
        resolve();
      } else {
        reject();
      }
    }, 5000);
  });
};

//* Revise chaining then and catch
makeDogPromise()
  .then(() => {
    console.log('YAY WE GOT A DOG!!!');
  })
  .catch(() => {
    console.log('NO DOG');
  });
