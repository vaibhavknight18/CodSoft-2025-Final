const display = document.getElementById("display");
const buttons = document.querySelectorAll(".btn");
const clearBtn = document.getElementById("clear");
const equalsBtn = document.getElementById("equals");

let currentInput = "";

// Handle button clicks
buttons.forEach(button => {
  button.addEventListener("click", () => {
    const value = button.getAttribute("data-value");
    if (value) {
      currentInput += value;
      display.value = currentInput;
    }
  });
});

// Clear screen
clearBtn.addEventListener("click", () => {
  currentInput = "";
  display.value = "";
});

// Evaluate expression
equalsBtn.addEventListener("click", () => {
  try {
    currentInput = eval(currentInput);  // ⚠️ eval for simplicity (not for production)
    display.value = currentInput;
  } catch {
    display.value = "Error";
    currentInput = "";
  }
});
