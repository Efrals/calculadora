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

  // Faz os cálculos das operações
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

  //Deleta o último número
  delete() {
    this.currentOperand = this.currentOperand.toString().slice(0, -1);
  }

  // Formata com vírgula e separa os números
  formataDisplayNumber(number) {
    const stringNumber = number.toString();
    const integerDigits = parseFloat(stringNumber.split(".")[0]);
    const decimalDigits = stringNumber.split(".")[1];
    let integerDisplay;

    //Verifica se o número é NaN e se for, retorna vazio
    if (isNaN(integerDigits)) {
      integerDisplay = "";
    } else {
      integerDisplay = integerDigits.toLocaleString("pt-BR", {
        maximumFractionDigits: 0,
      });
    }

    //Verifica se o número tem alguma parte decimal
    if (decimalDigits != null) {
      return `${integerDisplay},${decimalDigits}`;
    } else {
      return integerDisplay;
    }
  }

  //Guarda as operações
  choseOperation(operation) {
    // Troca a operação se não há número atual e já existe uma operação
    if (this.currentOperand === "" && this.previousOperand !== "") {
      this.operation = operation;
      return;
    }

    // Se não há número atual, não faz nada
    if (this.currentOperand === "") return;

    // Verifica se há número anterior, antes de executar a operação anterior
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

  //Limpa os valores
  clear() {
    this.currentOperand = "";
    this.previousOperand = "";
    this.operation = undefined;
  }

  // Atualiza o display da calculadora
  updateDisplay() {
    this.previousOperandText.innerText = `${this.previousOperand} ${
      this.operation || ""
    }`;
    this.currentOperandText.innerText = this.formataDisplayNumber(
      this.currentOperand
    );
  }
}

// Cria uma nova instância da calculadora
const calculator = new Calculator(previousOperandText, currentOperandText);

// Botões de números
for (const numberButton of numberButtons) {
  numberButton.addEventListener("click", () => {
    calculator.appendNumber(numberButton.innerText);
    calculator.updateDisplay();
  });
}

// Botões de operação
for (const operationButton of operationButtons) {
  operationButton.addEventListener("click", () => {
    calculator.choseOperation(operationButton.innerText);
    calculator.updateDisplay();
  });
}

// Botão AC
allClearButton.addEventListener("click", () => {
  calculator.clear();
  calculator.updateDisplay();
});

// Botão de igual
equalsButton.addEventListener("click", () => {
  calculator.calculate();
  calculator.updateDisplay();
});

// Botão de delete
deleteButton.addEventListener("click", () => {
  calculator.delete();
  calculator.updateDisplay();
});
