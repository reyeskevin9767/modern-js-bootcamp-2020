let nums = [4, 5, 6, 7];
let mystery = [4, 5, 6, 7];
let moreNums = nums;

//* Similiar to arrays, objects reference memory
console.log(nums === mystery); // false
console.log(nums === moreNums); // true

//* An empty array references a different memory
const user = {
  username: 'CherryGarcia8',
  email: 'garcia@gmail.com',
  notifications: ['message', 'alert'],
  notifications2: [],
};

//* False because both reference different memory spaces
if (user.notifications === []) {
  console.log('NO NEW NOTIFICATIONS!');
}

//* False because both reference different memory spaces
if (user.notifications2 === []) {
  console.log('NO NEW NOTIFICATIONS!');
}

//* If length is 0 (false), then will be true with NOT
if (!user.notifications.length) {
  console.log('NO NEW NOTIFICATIONS!');
}

//* If length is 0 (false), then will be true with NOT
if (!user.notifications2.length) {
  console.log('NO NEW NOTIFICATIONS!');
}
