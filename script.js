let display = document.getElementById("display");

function append(value) {
  display.value += value;
}

function clearDisplay() {
  display.value = "";
}

function calculate() {
  try {
    display.value = eval(display.value); // quick & easy for demo
  } catch (error) {
    display.value = "Error";
  }
}
