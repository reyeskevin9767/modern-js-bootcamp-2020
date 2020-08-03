//* This is a FAKE Http Request Function
//* It takes 1 second to resolve or reject the promise,
//* depending on the url that is passed in
const fakeRequest = (url) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const pages = {
        '/users': [
          { id: 1, username: 'Bilbo' },
          { id: 5, username: 'Esmerlda' },
        ],
        '/about': 'This is the about page!',
      };

      const data = pages[url];

      if (data) {
        resolve({ status: 200, data });
      } else {
        reject({ status: 404 });
      }
    }, 1000);
  });
};

//* Check if 'about' is in data
fakeRequest('/about')
  .then((res) => {
    console.log('Status Code', res.status);
    console.log('Data', res.data);
    console.log('REQUEST WORKED!');
  })
  .catch((res) => {
    console.log(res.status);
    console.log('REQUEST FAILED');
  });

//* Check if 'users' is in data
fakeRequest('/users')
  .then((res) => {
    console.log('Status Code', res.status);
    console.log('Data', res.data);
    console.log('REQUEST WORKED!');
  })
  .catch((res) => {
    console.log(res.status);
    console.log('REQUEST FAILED');
  });

//* Check if 'dogs' is in data
fakeRequest('/dogs')
  .then((res) => {
    console.log('Status Code', res.status);
    console.log('Data', res.data);
    console.log('REQUEST WORKED!');
  })
  .catch((res) => {
    console.log(res.status);
    console.log('REQUEST FAILED');
  });
