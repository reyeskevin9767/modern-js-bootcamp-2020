const btn = document.querySelector('button');

//* When button is mouseover, button moves around
btn.addEventListener('mouseover', function () {
  console.log('mouseover me');
  const height = Math.floor(Math.random() * window.innerHeight);
  const width = Math.floor(Math.random() * window.innerWidth);
  btn.style.left = `${height}px`;
  btn.style.top = `${width}px`;
});

//* When button is click, shows winning message
btn.addEventListener('click', function () {
  btn.innerText = 'YOU GOT ME';
  document.body.style.backgroundColor = 'green';
});
