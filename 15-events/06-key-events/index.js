const input = document.querySelector('#username');

//* Key Event
input.addEventListener('keydown', function () {
  console.log('Key Down');
});

//* Key Event
input.addEventListener('keyup', function () {
  console.log('Key Up');
});

//* Key Event
input.addEventListener('keypress', function () {
  console.log('Key Press');
});

const addItemInput = document.querySelector('#addItem');
const itemsUL = document.querySelector('#items');

addItemInput.addEventListener('keypress', function (e) {
  if (e.key === 'Enter') {
    if (!this.value) return;
    const newItemText = this.value;
    const newItem = document.createElement('li');
    newItem.innerText = newItemText;
    itemsUL.append(newItem);
    this.value = '';
  }
});
