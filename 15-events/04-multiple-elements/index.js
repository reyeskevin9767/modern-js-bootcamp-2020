const colors = [
  'red',
  'orange',
  'yellow',
  'green',
  'blue',
  'purple',
  'indigo',
  'violet',
];

//* Set the background color to h1
const changeColor = function () {
  const h1 = document.querySelector('h1');
  h1.style.color = this.style.backgroundColor;
};

const container = document.querySelector('#boxes');

//* Create box and change its color
for (let color of colors) {
  const box = document.createElement('div');
  box.style.backgroundColor = color;
  box.classList.add('box');
  container.append(box);
  box.addEventListener('click', changeColor);
}
