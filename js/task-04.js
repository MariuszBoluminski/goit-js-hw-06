const decBtn = document.querySelector(`button[data-action="decrement"]`);
const incBtn = document.querySelector(`button[data-action="increment"]`);
let counterValue = 0;
const displayValue = document.querySelector("#value");
const updateDisplay = () => {
  displayValue.textContent = counterValue;
};

const decrement = () => {
  counterValue--;
  updateDisplay();
};

const increment = () => {
  counterValue++;
  updateDisplay();
};

updateDisplay();

decBtn.addEventListener("click", decrement);
incBtn.addEventListener("click", increment);
