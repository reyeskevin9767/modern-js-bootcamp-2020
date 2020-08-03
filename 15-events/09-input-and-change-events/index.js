const creditCardInput = document.querySelector('#cc');
const termsCheckbox = document.querySelector('#terms');
const veggieSelect = document.querySelector('#veggie');

const formData = {};
//* Add Event Listener to all inputs and set to an object
for (let input of [creditCardInput, termsCheckbox, veggieSelect]) {
  input.addEventListener('input', ({ target }) => {
    const { name, type, value, checked } = target;
    formData[name] = type === 'checkbox' ? checked : value;
    console.log(formData);
  });
}

// creditCardInput.addEventListener('input', e =>{
//     console.log("CC CHANGED", e);
//     formData['cc'] = e.target.value;
// })

// veggieSelect.addEventListener('input', e =>{
//     console.log("Veggie CHANGED", e);
//     formData['veggie'] = e.target.value;
// })

// termsCheckbox.addEventListener('input', e =>{
//     console.log("CheckBox", e);
//     formData['checkbox'] = e.target.checked;
// } )
