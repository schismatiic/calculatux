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
  let array1 = [];
  let array2 = [];
  for (let index = 0; index <= 9; index++) {
    // ========= First number =========
    let numberButtons = document.getElementById(`${index}`);
    const equalButton = document.getElementById("equal__button");
    numberButtons.addEventListener("click", () => {
      array1.push(index);
      let num1 = array1.join("");
      display.textContent = `${num1}`;
      // ========= Operator =========
      for (let i = 0; i < 6; i++) {
        const operatorButtons = document.getElementById(`${operators[i]}`);
        operatorButtons.addEventListener("click", () => {
          const operator = `${operators[i]}`;
          if (`${operator}` === "√x") {
            operation.textContent = `√(${num1}) =`;
            operation.style.cssText = "color: black; font-weight: 400";
            display.textContent = `√(${num1})`;
            equalButton.addEventListener("click", () => {
              operation.style.cssText = "color: black; font-weight: 400";
              display.textContent = `${squareRoot(num1)}`;
            });
          } else {
            display.textContent = `${num1} ${operator}`;
            // ========= Second number =========
            for (let j = 0; j <= 9; j++) {
              let numberButtons2 = document.getElementById(`${j}`);
              numberButtons2.addEventListener("click", () => {
                array2.push(j);
                let num2 = array2.join("");
                display.textContent = `${num1} ${operator} ${num2}`;
                equalButton.addEventListener("click", () => {
                  const result = operate(num1, num2, operator);
                  operation.textContent = `${num1} ${operator} ${num2} =`;
                  operation.style.cssText = "color: black; font-weight: 400";
                  display.textContent = `${result}`;
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
