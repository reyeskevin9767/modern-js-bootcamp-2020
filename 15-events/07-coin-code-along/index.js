//* Check if two items are touching
function isTouching(a, b) {
  const aRect = a.getBoundingClientRect();
  const bRect = b.getBoundingClientRect();

  return !(
    aRect.top + aRect.height < bRect.top ||
    aRect.top > bRect.top + bRect.height ||
    aRect.left + aRect.width < bRect.left ||
    aRect.left > bRect.left + bRect.width
  );
}

const avatar = document.querySelector('#player');
const coin = document.querySelector('#coin');

//* Event Listener when user pushes down on arrow keys
window.addEventListener('keyup', function (e) {
  if (e.key === 'ArrowDown' || e.key === 'Down') {
    moveVertical(avatar, 50);
  } else if (e.key === 'ArrowUp' || e.key === 'Up') {
    moveVertical(avatar, -50);
  } else if (e.key === 'ArrowRight' || e.key === 'Right') {
    moveHorizontal(avatar, 50);
    avatar.style.transform = 'scale(1,1)';
  } else if (e.key === 'ArrowLeft' || e.key === 'Left') {
    moveHorizontal(avatar, -50);
    avatar.style.transform = 'scale(-1,1)';
  }

  if (isTouching(avatar, coin)) moveCoin();
});

//* Move up or down
const moveVertical = (element, amount) => {
  const currTop = extractPos(element.style.top);
  element.style.top = `${currTop + amount}px`;
};

//* Move right or left
const moveHorizontal = (element, amount) => {
  const currLeft = extractPos(element.style.left);
  element.style.left = `${currLeft + amount}px`;
};

//* Find position of items
const extractPos = (pos) => {
  if (!pos) return 100;
  return parseInt(pos.slice(0, -2));
};

//* Move the coin
const moveCoin = () => {
  const x = Math.floor(Math.random() * window.innerHeight);
  const y = Math.floor(Math.random() * window.innerWidth);

  coin.style.top = `${y}px`;
  coin.style.left = `${x}px`;
};

moveCoin();
