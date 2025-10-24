// document.addEventListener("DOMContentLoaded", () => {});

let display = document.getElementById("display");

function appendValue(value) {
  display.value += value;
}

function clearDisplay() {
  display.value = "";
}

function deleteLast() {
  display.value = display.value.slice(0, -1);
}

function calculatePercentage() {
  try {
    const value = parseFloat(display.value);
    if (isNaN(value)) {
      display.value = "Error";
    } else {
      display.value = value / 100;
    }
  } catch (error) {
    display.value = "Error";
  }
}

function calculateSquareRoot() {
  try {
    const value = parseFloat(display.value);
    if (isNaN(value)) {
      display.value = "Error";
    } else if (value < 0) {
      display.value = "Invalid (√-)";
    } else {
      display.value = Math.sqrt(value);
    }
  } catch (error) {
    display.value = "Error";
  }
}

function calculate() {
  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = "Error";
  }
}
