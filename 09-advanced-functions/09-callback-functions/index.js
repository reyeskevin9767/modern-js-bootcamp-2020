//* setTimeout(callback, delay)
//* We pass an anonymous callback function
setTimeout(function () {
  alert('WELCOME!');
}, 5000);

//* Select The Tag Button and assign to btn
const btn = document.querySelector('button');

//* When button is click, call the function
btn.addEventListener('click', function () {
  
  alert('Why Did you click me');
});
