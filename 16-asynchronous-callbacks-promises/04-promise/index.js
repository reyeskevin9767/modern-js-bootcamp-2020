//* Create promise
const willGetYouADog = new Promise((resolve, reject) => {
  const rand = Math.random();
  if (rand < 0.5) {
    resolve();
  } else {
    reject();
  }
});

//* Successful Promise
willGetYouADog.then(() => {
  console.log('YAY WE GOT A DOG!!!');
});

//* Failed Promise
willGetYouADog.catch(() => {
  console.log('NO DOG');
});
