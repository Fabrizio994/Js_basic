let counterValue = 0;

function updateCounterDisplay() {
  document.getElementById("counterDisplay").innerText = counterValue;
}

function increment() {
  counterValue++;
  updateCounterDisplay();
}

function decrement() {
  counterValue--;
  updateCounterDisplay();
}

function reset() {
  counterValue = 0;
  updateCounterDisplay();
}

document.getElementById("incrementBtn").addEventListener("click", increment);
document.getElementById("decrementBtn").addEventListener("click", decrement);
document.getElementById("resetBtn").addEventListener("click", reset);
