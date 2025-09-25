const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;
const rootSquare = (a) => Math.sqrt(a);
const pow = (a, b) => a ** b;
const operate = (a, b, operator) => {
  switch (operator) {
    case "+":
      return add(a, b);
      break;
    case "-":
      return subtract(a, b);
      break;
    case "*":
      return multiply(a, b);
      break;
    case "/":
      return divide(a, b);
      break;
    case "√x":
      return rootSquare(a);
      break;
    case "^":
      return pow(a, b);
      break;
    default:
      console.log("ERROR!");
      break;
  }
};
const ac = () => {
  calculator();
};
// const num1 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
// const num2 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const operators = ["+", "-", "*", "/", "√x", "^"];
const display = document.getElementById("display");
const acButton = document.getElementById("ac__button");
const operation = document.getElementById("operation");
const calculator = () => {
  for (let index = 0; index <= 9; index++) {
    acButton.addEventListener("click", () => {
      display.textContent = 0;
      calculator();
    });
    let numberButtons = document.getElementById(`${index}`);
    const equalButton = document.getElementById("equal__button");
    numberButtons.addEventListener("click", () => {
      display.textContent = `${index}`;
      const num1 = parseInt(`${index}`);
      for (let i = 0; i < 6; i++) {
        acButton.addEventListener("click", () => {
          display.textContent = 0;
          calculator();
        });
        const operatorButtons = document.getElementById(`${operators[i]}`);
        operatorButtons.addEventListener("click", () => {
          const operator = `${operators[i]}`;
          display.textContent = `${num1} ${operator}`;
          for (let j = 0; j <= 9; j++) {
            acButton.addEventListener("click", () => {
              display.textContent = 0;
              calculator();
            });
            let numberButtons2 = document.getElementById(`${j}`);
            numberButtons2.addEventListener("click", () => {
              acButton.addEventListener("click", () => {
                display.textContent = 0;
                operation.style.cssText = "color: #8f8f8f; font-weight: 400";
                calculator();
              });
              const num2 = parseInt(`${j}`);
              display.textContent = `${num1} ${operator} ${num2}`;
              equalButton.addEventListener("click", () => {
                operation.textContent = `${num1} ${operator} ${num2} =`;
                operation.style.cssText = "color: black; font-weight: 400";
                display.textContent = `${operate(num1, num2, operator)}`;
              });
            });
          }
        });
      }
    });
  }
};
calculator();
