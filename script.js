const numberButtons = document.querySelectorAll("[data-number]");
const operationButtons = document.querySelectorAll("[data-operator]");
const equalsButton = document.querySelectorAll("[data-equals]");
const deleteButton = document.querySelectorAll("[data-delete]");
const allClearButton = document.querySelectorAll("[data-all-clear]");
const previousOperandText = document.querySelectorAll(
  "[data-previous-operand]"
);

const currentOperandText = document.querySelector("[data-current-operand]");

class Calculator {
  constructor(previousOperandText, currentOperandText) {
    this.previousOperandText = previousOperandText;
    this.currentOperandText = currentOperandText;
  }

  clear() {
    this.currentOperand = "";
    this.previousOperand = "";
    this.operation = undefined;
  }
  updateDisplay() {
    this.previousOperandText.innerText = this.previousOperand;
    this.currentOperandText.innerText = this.currentOperand;
  }
}

const calculator = new Calculator(previousOperandText, currentOperandText);

allClearButton.addEventListener("click", () => {
  calculator.clear();
  calculator.updateDisplay();
});
