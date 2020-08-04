// Debounce Function
const debounce = (func, delay) => {
  let timeoutId;

  // Return a function with func's args
  return (...args) => {
    // Stops the timeoutId, which allows for a new timeoutId to be created
    if (timeoutId) {
      clearTimeout(timeoutId);
    }

    // Stopping the timeoutId after second input allows for new timeoutId
    timeoutId = setTimeout(() => {
      func(...args);
    }, delay);
  };
};
