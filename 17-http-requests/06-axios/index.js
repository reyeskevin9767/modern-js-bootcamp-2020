//* Using Axios to get the data
axios
  .get('https://swapi.dev/api/planets/')
  .then((res) => {
    console.log(res.data);
  })
  .catch((err) => {
    console.log('In Catch');
    console.log(err);
  });
