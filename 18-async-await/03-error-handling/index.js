//* Use try and catch for error handling
async function getPlanets() {
  try {
    const res = await axios.get('https://swapi.dev/api/planetsadadf/');
    console.log(res.data);
  } catch (e) {
    console.log('In Catch', e);
  }
}

getPlanets();
