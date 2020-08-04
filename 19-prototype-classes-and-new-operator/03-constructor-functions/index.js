// function makeColor(r, g, b) {
//     const color = {};
//     color.r = r;
//     color.g = g;
//     color.b = g;
//     color.rgb = function () {
//         const { r, g, b } = this;
//         return `rgb(${r}, ${g}, ${b})`;
//     };
//     color.hex = function () {
//         const { r, g, b } = this;
//         return (
//             '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)
//         );
//     };
//     return color;
// }

// const firstColor = makeColor(35, 115, 150);
// console.log(firstColor.rgb());
// console.log(firstColor.hex());

//* Assign r,g,b to color
function Color(r, g, b) {
  this.r = r;
  this.g = g;
  this.b = b;
}

//* Set rgb function to color
Color.prototype.rgb = function () {
  const { r, g, b } = this;
  return `rgb(${r}, ${g}, ${b})`;
};

//* Set hex function to color
Color.prototype.hex = function () {
  const { r, g, b } = this;
  return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
};

//* Set rgba function to color
Color.prototype.rgba = function (a = 1.0) {
  const { r, g, b } = this;
  return `rgba(${r}, ${g}, ${b}, ${a})`;
};

const color1 = new Color(255, 40, 100);
const color2 = new Color(0, 0, 0);

const h1 = document.querySelector('h1');
console.log(h1);

h1.style.backgroundColor = color1.rgb(233, 44, 32);
