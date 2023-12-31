"use strict";

let firstNumber;
let secondNumber;
let operator;
let displayValue = 0;
let result;

let display = document.querySelector("#display");

const cancelButton = document.querySelector("#cButton");
cancelButton.addEventListener("click", reset);

const cancelEntryButton = document.querySelector("#ceButton");
cancelEntryButton.addEventListener("click", () => {
  displayValue = 0;
  updateDisplay();
});

const numberButtons = document.querySelectorAll(".numbers");
numberButtons.forEach((button) => {
  button.addEventListener("click", () => {
    checkCorrectValue();
    displayValue += `${button.value}`;
    updateDisplay();
  });
});

const periodButton = document.querySelector("#periodButton");
periodButton.addEventListener("click", () => {
  checkCorrectValue();
  const regex = /[.]/g;
  if (displayValue.match(regex)) {
    return;
  } else {
    displayValue += `${periodButton.value}`;
    updateDisplay();
  }
});

const operatorButtons = document.querySelectorAll(".operator");
operatorButtons.forEach((button) => {
  button.addEventListener("click", () => {
    if (operator != "") {
      secondNumber = displayValue;
      operate(firstNumber, secondNumber, operator);
      firstNumber = displayValue;
      displayValue = "";
      operator = button.value;
    } else {
      firstNumber = displayValue;
      displayValue = "";
      updateDisplay();
      operator = button.value;
    }
  });
});

const equelButton = document.querySelector("#equalButton");
equelButton.addEventListener("click", () => {
  secondNumber = displayValue;
  operate(firstNumber, secondNumber, operator);
});

function checkCorrectValue() {
  if (displayValue == 0 || displayValue == undefined || displayValue == NaN) {
    displayValue = "";
  }
  return;
}

function updateDisplay() {
  display.textContent = displayValue;
}

function displayResult() {
  displayValue = result;
  updateDisplay();
  operator = "";
}

function reset() {
  displayValue = 0;
  updateDisplay();
  firstNumber = "";
  secondNumber = "";
  operator = "";
}

function roundResult() {
  result = (Math.round(result * 1000))/1000;
}

function add(firstNumber, secondNumber) {
  result = +firstNumber + +secondNumber;
}

function subtract(firstNumber, secondNumber) {
  result = firstNumber - secondNumber;
}

function multiply(firstNumber, secondNumber) {
  result = firstNumber * secondNumber;
}

function divide(firstNumber, secondNumber) {
  result = firstNumber / secondNumber;
}

function operate(firstNumber, secondNumber, operator) {
  switch (operator) {
    case "+":
      add(firstNumber, secondNumber);
      roundResult();
      displayResult();
      break;
    case "-":
      subtract(firstNumber, secondNumber);
      roundResult();
      displayResult();
      break;
    case "*":
      multiply(firstNumber, secondNumber);
      roundResult();
      displayResult();
      break;
    case "/":
      divide(firstNumber, secondNumber);
      roundResult();
      displayResult();
      break;
    default:
      alert("Wrong expression");
      reset();
  }
}

window.addEventListener("keydown", (e) => {
  const button = document.querySelector(`button[data-key='${e.key}']`);
  if (!button) return;
  button.click();
});

window.addEventListener("keydown", (e) => {
  if (e.key == "Enter") equelButton.click();
});

window.addEventListener("keydown", (e) => {
  if (e.key == "Backspace") {
    const displayString = displayValue.toString().slice(0, -1);
    displayValue = +displayString;
    updateDisplay();
  }
});
