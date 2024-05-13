// contatore
let counter = 0;

// h1
const h1Title = document.createElement("h1");
h1Title.className = "title";
h1Title.innerHTML = "Sono un Counter!";
document.body.appendChild(h1Title);

// div contatore
const counterDiv = document.createElement("div");
counterDiv.className = "counterDiv";
counterDiv.innerHTML = counter;
document.body.appendChild(counterDiv);

//pulsante "decrementare"
const decrementButton = document.createElement("button");
decrementButton.className = "decrementBtn";
decrementButton.innerHTML = "-";
decrementButton.addEventListener("click", () => {
  counter--;
  counterDiv.innerHTML = counter;
});
document.body.appendChild(decrementButton);

//pulsante "Reset"
const resetButton = document.createElement("button");
resetButton.className = "resetBtn";
resetButton.innerHTML = "Reset";
resetButton.addEventListener("click", () => {
  counter = 0;
  counterDiv.innerHTML = counter;
});
document.body.appendChild(resetButton);

//pulsante "incrementare"
const incrementButton = document.createElement("button");
incrementButton.className = "incrementBtn";
incrementButton.innerHTML = "+";
incrementButton.addEventListener("click", () => {
  counter++;
  counterDiv.innerHTML = counter;
});
document.body.appendChild(incrementButton);
