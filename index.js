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
  display.textContent = displayValue;
});

const numberButtons = document.querySelectorAll(".numbers");
numberButtons.forEach((button) => {
  button.addEventListener("click", () => {
    checkCorrectValue();
    displayValue += `${button.value}`;
    display.textContent = displayValue;
  });
});

const operatorButtons = document.querySelectorAll(".operator");
operatorButtons.forEach((button) => {
  button.addEventListener("click", () => {
    if()
    firstNumber = displayValue;
    displayValue = "";
    display.textContent = displayValue;
    operator = `${button.value}`;
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

function displayResult() {
  displayValue = result;
  display.textContent = displayValue;
  operator = '';
}

function reset() {
  displayValue = 0;
  display.textContent = displayValue;
  firstNumber = "";
  secondNumber = "";
  operator = "";
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
      displayResult();
      break;
    case "-":
      subtract(firstNumber, secondNumber);
      displayResult();
      break;
    case "*":
      multiply(firstNumber, secondNumber);
      displayResult();
      break;
    case "/":
      divide(firstNumber, secondNumber);
      displayResult();
      break;
    default:
      alert("Wrong expression");
      reset();
  }
}
