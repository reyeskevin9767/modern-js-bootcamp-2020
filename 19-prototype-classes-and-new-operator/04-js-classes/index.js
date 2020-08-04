// function Color(r, g, b) {
//     this.r = r;
//     this.g = g;
//     this.b = b;
// }

// Color.prototype.rgb =

// Color.prototype.hex = function () {
//     const { r, g, b } = this;
//     return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
// };

// Color.prototype.rgba = function (a = 1.0) {
//     const { r, g, b } = this;
//     return `rgba(${r}, ${g}, ${b}, ${a})`;
// };
// function () {
//     const { r, g, b } = this;
//     return `rgb(${r}, ${g}, ${b})`;
// };
// const color1 = new Color(255, 40, 100);
// const color2 = new Color(0, 0, 0);

// const h1 = document.querySelector('h1');
// console.log(h1);

// h1.style.backgroundColor = color1.rgb(233, 44, 32);

/* -------------------------------------------------------------------------- */

//* Class color
class color {
  constructor(r, g, b, name) {
    this.r = r;
    this.g = g;
    this.b = b;
    this.name = name;
  }
  greet() {
    return `Hello FROM ${this.name}!`;
  }
  innerRGB() {
    const { r, g, b } = this;
    return `${r}, ${g}, ${b}`;
  }
  rgb() {
    return `rgb(${this.innerRGB()})`;
  }
  rgba(a = 1.0) {
    return `rgba(${this.innerRGB()}, ${a})`;
  }
  hex() {
    const { r, g, b } = this;
    return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
  }
}

const c1 = new color(255, 67, 89, 'tomato');
const c2 = new color(255, 255, 255, 'white');
const c3 = new color(253, 225, 25, 'red');
