//* Push And Pop
let topSongs = [
  'First Time Ever I Save Your Face',
  'God Only Knows',
  'A Day In The Life',
  'Life On Mars',
];

//* Push - Add To End of Array
topSongs.push('Fortunate Son');
console.log(topSongs); // ['First Time Ever I Save Your Face','God Only Knows','A Day In The Life','Life On Mars','Fortunate Son']

topSongs.push('Landslide');
console.log(topSongs); // ['First Time Ever I Save Your Face','God Only Knows','A Day In The Life','Life On Mars','Fortunate Son', 'Landslide']

topSongs.push(1234353);
console.log(topSongs); // ['First Time Ever I Save Your Face','God Only Knows','A Day In The Life','Life On Mars','Fortunate Son', 'Landslide', 1234353]

//* Pop - Removes The Last Element
topSongs.pop();
console.log(topSongs); // ['First Time Ever I Save Your Face','God Only Knows','A Day In The Life','Life On Mars','Fortunate Son', 'Landslide']

topSongs.pop();
console.log(topSongs); // ['First Time Ever I Save Your Face','God Only Knows','A Day In The Life','Life On Mars','Fortunate Son']

topSongs.pop();
console.log(topSongs); // ['First Time Ever I Save Your Face','God Only Knows','A Day In The Life','Life On Mars']
