const createAutoComplete = ({
  root,
  renderOption,
  onOptionSelect,
  inputValue,
  fetchData,
}) => {
  // Add into autocomplete
  root.innerHTML = `
    <label><b>Search</b></label>
    <input class="input" />
    <div class="dropdown">
      <div class="dropdown-menu">
        <div class="dropdown-content results"></div>
      </div>
    </div>
    `;

  // Query Selectors
  const input = root.querySelector('input');
  const dropdown = root.querySelector('.dropdown');
  const resultsWrapper = root.querySelector('.results');

  // Each keypress sends a request to API
  const onInput = async (event) => {
    // Add the class 'is-active' to dropdown
    dropdown.classList.add('is-active');

    // Clear results
    resultsWrapper.innerHTML = '';

    // Take movie data and assign to movies
    const items = await fetchData(event.target.value);

    // When no movies are in input
    if (!items.length) {
      dropdown.classList.remove('is-active');
      return;
    }

    // Loop through movies
    for (let item of items) {
      const option = document.createElement('a');

      // Add the class 'dropdown-item to archor tags
      option.classList.add('dropdown-item');

      // Add movie's Poster and Title to archor tags
      option.innerHTML = renderOption(item);

      option.addEventListener('click', () => {
        dropdown.classList.remove('is-active');
        input.value = inputValue(item);
        onOptionSelect(item);
      });

      // Append archor tags to div with results tag
      resultsWrapper.appendChild(option);
    }
  };

  // Prevents each keypress from sending a request and only send after 1000 delay
  input.addEventListener('input', debounce(onInput, 1000));

  // Closes dropdown
  document.addEventListener('click', (event) => {
    if (!root.contains(event.target)) {
      dropdown.classList.remove('is-active');
    }
  });
};
