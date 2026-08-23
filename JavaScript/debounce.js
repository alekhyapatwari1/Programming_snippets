function debounce(func, delay) {
  let timeoutId;
  return function (...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func.apply(this, args), delay);
  };
}

const logMessage = debounce(() => console.log("Debounced function executed!"), 300);
logMessage();
