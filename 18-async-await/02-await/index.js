//* Instead of this and catch, await replaces them
async function getPlanets() {
  const res = await axios.get('https://swapi.dev/api/planets/');
  console.log(res.data);
}

getPlanets();
