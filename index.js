let firstNumber;
let secondNumber;
let operator;
let displayValue = 0;

let display = document.querySelector('#display')

const cancelButton = document.querySelector('#cButton');
const cancelEntryButton = document.querySelector('#ceButton');
const nullButton = document.querySelector('#nullButton');
const oneButton = document.querySelector('#oneButton');
const twoButton = document.querySelector('#twoButton');
const threeButton = document.querySelector('#threeButton');
const fourButton = document.querySelector('#fourButton');
const fiveButton = document.querySelector('#fiveButton');
const sixButton = document.querySelector('#sixButton');
const sevenButton = document.querySelector('#sevenButton');
const eightButton = document.querySelector('#eightButton');
const nineButton = document.querySelector('#nineButton');
const equalButton = document.querySelector('#equalButton');
const plusButton = document.querySelector('#plusButton');
const minusButton = document.querySelector('#minusButton');
const multiplyButton = document.querySelector('#multiplyButton');
const divideButton = document.querySelector('#divideButton');

function checkZero() {
  if (displayValue == 0) {
    displayValue = '';
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
        alert('Wrong expression'); 
  }
}

