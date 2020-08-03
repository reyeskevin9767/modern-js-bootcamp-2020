const creditCardInput = document.querySelector('#cc');
const termsCheckbox = document.querySelector('#terms');
const veggieSelect = document.querySelector('#veggie');

const form = document.querySelector('#signup-form');

//* Prevent Default cancels the submit event
form.addEventListener('submit', function (e) {
  e.preventDefault();
  console.log('cc', creditCardInput.value);
  console.log('terms', termsCheckbox.checked);
  console.log('veggieSelect', veggieSelect.value);
});
