const btn = document.querySelector('button');

//* Add EventListener
btn.addEventListener('click', function () {
  alert('Clicked');
});

//* Add EventListener
btn.addEventListener('click', function () {
  console.log('Second Thing');
});

//* Add EventListener
btn.addEventListener('mouseover', function () {
  btn.innerText = 'Stop click me';
});

//* Add EventListener
btn.addEventListener('mouseout', function () {
  btn.innerText = 'Click Me';
});
