const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;
const squareRoot = (a) => Math.sqrt(a);
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
const operation = document.getElementById("operation");
// ========= AC Button =========
const acButton = document.getElementById("ac__button");
acButton.addEventListener("click", () => {
  operation.style.cssText = "color: #8f8f8f; font-weight: 400";
  display.textContent = 0;
  calculator();
});
// =============================
const calculator = () => {
  for (let index = 0; index <= 9; index++) {
    let numberButtons = document.getElementById(`${index}`);
    const equalButton = document.getElementById("equal__button");
    numberButtons.addEventListener("click", () => {
      display.textContent = `${index}`;
      const num1 = parseInt(`${index}`);
      for (let i = 0; i < 6; i++) {
        const operatorButtons = document.getElementById(`${operators[i]}`);
        operatorButtons.addEventListener("click", () => {
          const operator = `${operators[i]}`;
          if (`${operator}` === "√x") {
            display.textContent = `${num1} ${operator}`;
            equalButton.addEventListener("click", () => {
              operation.textContent = `${num1} ${operator} =`;
              operation.style.cssText = "color: black; font-weight: 400";
              display.textContent = `${squareRoot(num1)}`;
            });
          } else {
            display.textContent = `${num1} ${operator}`;
            for (let j = 0; j <= 9; j++) {
              let numberButtons2 = document.getElementById(`${j}`);
              numberButtons2.addEventListener("click", () => {
                const num2 = parseInt(`${j}`);
                display.textContent = `${num1} ${operator} ${num2}`;
                equalButton.addEventListener("click", () => {
                  operation.textContent = `${num1} ${operator} ${num2} =`;
                  operation.style.cssText = "color: black; font-weight: 400";
                  display.textContent = `${operate(num1, num2, operator)}`;
                });
              });
            }
          }
        });
      }
    });
  }
};
calculator();
