let display = document.getElementById("display");

function append(value) { // Creates a function that takes one argument (the number or operator clicked).
  display.value += value; // Adds (+=) the new value to the current text in the display.
}

function clearDisplay() {
  display.value = ""; //sets the display back to an empty string, triggered when you click the C (clear) button
}

function calculate() {
  try {
    display.value = eval(display.value); 
  } catch (error) {
    display.value = "Error";
  }
}
/*
Concepts to learn : 
1. eval() takes a string and executes it as JavaScript.
2. If the code inside try works fine → show the result.
3.If it fails, catch runs and shows "Error".
4.append() → Adds numbers/operators to the screen.
*/
