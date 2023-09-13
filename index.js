let firstNumber;
let secondNumber;
let operator;

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
