const numberButtons = document.querySelectorAll("[data-number]");
const operationButtons = document.querySelectorAll("[data-operator]");
const equalsButton = document.querySelector("[data-equals]");
const deleteButton = document.querySelector("[data-delete]");
const allClearButton = document.querySelector("[data-all-clear]");
const previousOperandText = document.querySelector("[data-previous-operand]");
const currentOperandText = document.querySelector("[data-current-operand]");

class Calculator {
  constructor(previousOperandText, currentOperandText) {
    this.previousOperandText = previousOperandText;
    this.currentOperandText = currentOperandText;
    this.clear();
  }

  calculate() {
    let result;

    const previous = parseFloat(this.previousOperand);
    const current = parseFloat(this.currentOperand);

    if (isNaN(previous) || isNaN(current)) return;
    switch (this.operation) {
      case "+":
        result = previous + current;
        break;
      case "-":
        result = previous - current;
        break;
      case "*":
        result = previous * current;
        break;
      case "/":
        result = previous / current;
        break;
      default:
        return;
    }
    this.currentOperand = result;
    this.operation = undefined;
    this.previousOperand = "";
  }

  //Guarda as operações
  choseOperation(operation) {
    //Verifica se o valor atual está vazio
    if (this.currentOperand === "") return;
    //Verifica se o valor atual é vazio e se o valor anterior está vazio
    if (this.previousOperand !== "") {
      this.calculate();
    }

    this.operation = operation;
    this.previousOperand = this.currentOperand;
    this.currentOperand = "";
  }

  //Coloca um número no final
  appendNumber(number) {
    //Para limitar em adicionar um ponto decimal
    if (number === "." && this.currentOperand.includes(".")) return;

    this.currentOperand = `${this.currentOperand}${number}`;
  }

  clear() {
    this.currentOperand = "";
    this.previousOperand = "";
    this.operation = undefined;
  }

  updateDisplay() {
    this.previousOperandText.innerText = `${this.previousOperand} ${
      this.operation || ""
    }`;
    this.currentOperandText.innerText = this.currentOperand;
  }
}

const calculator = new Calculator(previousOperandText, currentOperandText);

for (const numberButton of numberButtons) {
  numberButton.addEventListener("click", () => {
    calculator.appendNumber(numberButton.innerText);
    calculator.updateDisplay();
  });
}

// Adiciona o evento de clique para os botões de operação
for (const operationButton of operationButtons) {
  operationButton.addEventListener("click", () => {
    calculator.choseOperation(operationButton.innerText);
    calculator.updateDisplay();
  });
}

/// Adiciona o evento de clique para os botões de operação
allClearButton.addEventListener("click", () => {
  calculator.clear();
  calculator.updateDisplay();
});
