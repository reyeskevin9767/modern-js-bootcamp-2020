//* Style only works inline styles
const h1 = document.querySelector('h1');

h1.style.color; // ""

h1.style.fontSize; // ""

//* Use getComputedStyle to get actual styles
const compStyles = getComputedStyle(h1);

compStyles.color; // "rgb(128, 0, 128)" (purple as an RGB color)

compStyles.fontSize; // "60px"
