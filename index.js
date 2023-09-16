"use strict";

let firstNumber;
let secondNumber;
let operator;
let displayValue = 0;

let display = document.querySelector("#display");

const cancelButton = document.querySelector("#cButton");
const cancelEntryButton = document.querySelector("#ceButton");

const operatorButtons = document.querySelectorAll(".operator");
operatorButtons.forEach((button) => {
  button.addEventListener("click", () => {
    firstNumber = displayValue;
    displayValue = "";
    display.textContent = displayValue;
    operator = `${button.value}`;
  });
});

const numberButtons = document.querySelectorAll(".numbers");
numberButtons.forEach((button) => {
  button.addEventListener("click", () => {
    checkZero();
    displayValue += `${button.value}`;
    display.textContent = displayValue;
  });
});

function checkZero() {
  if (displayValue == 0) {
    displayValue = "";
  }
  return;
}

function add(firstNumber, secondNumber) {
  result = firstNumber + secondNumber;
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
      break;
    case "-":
      subtract(firstNumber, secondNumber);
      break;
    case "*":
      multiply(firstNumber, secondNumber);
      break;
    case "/":
      divide(firstNumber, secondNumber);
      break;
    default:
      alert("Wrong expression");
  }
}
