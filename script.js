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
const equalButton = document.getElementById("equal__button");
const backspace = document.getElementById("backspace");

let result;
let operator2;
let verify = 0;
const tux = document.getElementById("tux");
tux.addEventListener("click", () => {
  tux.src = "https://media.tenor.com/S61VCO73mOAAAAAj/linux-tux.gif";
});
// ========= AC Button =========
const acButton = document.getElementById("ac__button");
acButton.addEventListener("click", () => {
  result;
  operator2;
  operation.style.cssText = "color: #8f8f8f; font-weight: 400";
  display.textContent = 0;
  verify++;
  calculator();
});
// =============================
const calculator = (num1 = 0, operator2) => {
  let num2;
  let array1 = [];
  let array2 = [];
  // ========= Backspace num1 =========
  backspace.addEventListener("click", () => {
    if (array1 !== undefined && num2 === undefined) {
      array1.pop();
      num1 = array1.join("");
      display.textContent = `${num1}`;
      verify = 0;
    }
  });
  if (num1 !== result) {
    for (let index = 0; index <= 9; index++) {
      // ========= First number =========
      let numberButtons = document.getElementById(`${index}`);
      numberButtons.addEventListener("click", () => {
        array1.push(index);
        num1 = array1.join("");
        display.textContent = `${num1}`;
      });
    }
  }
  // ========= This will execute if the user enter a second operator before = =========
  if (operator2 !== undefined) {
    display.textContent = `${num1} ${operator2}`;
    for (let j = 0; j <= 9; j++) {
      let numberButtons2 = document.getElementById(`${j}`);
      numberButtons2.addEventListener("click", () => {
        array2.push(j);
        num2 = parseInt(array2.join(""));
        if (operator2 === "/" && num2 === 0) {
          display.textContent = "You are a bad person";
          result = num1;
          calculator(result);
          console.log(1);
        }
        if (num1 !== result && operator2 === undefined) {
          num1 = (num1 - num2) / 10 ** array2.length;
        }
        display.textContent = `${num1} ${operator2} ${num2}`;
        for (let x = 0; x < 6; x++) {
          const operatorButtons2 = document.getElementById(`${operators[x]}`);
          operatorButtons2.addEventListener("click", () => {
            operator2 = operators[x];
            result = operate(num1, num2, operator2);
            operation.textContent = `${num1} ${operator} ${num2} =`;
            operation.style.cssText = "color: black; font-weight: 400";
            display.textContent = `${result}`;
            console.log(operator2);
            calculator(result, operator2);
            console.log(2);
          });
        }
        equalButton.addEventListener(
          "click",
          () => {
            result = operate(num1, num2, operator2);
            operation.textContent = `${num1} ${operator2} ${num2} =`;
            operation.style.cssText = "color: black; font-weight: 400";
            display.textContent = `${result}`;
            calculator(result);
            console.log(3);
          },
          { passive: true }
        );
      });
    }
  }
  // ========= Operator =========
  for (let i = 0; i < 6; i++) {
    const operatorButtons = document.getElementById(`${operators[i]}`);
    operatorButtons.addEventListener("click", () => {
      let operator = operators[i];
      if (`${operator}` === "√x") {
        display.textContent = `√(${num1})`;
        equalButton.addEventListener("click", () => {
          operation.textContent = `√(${num1}) =`;
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
            num2 = parseInt(array2.join(""));
            if (num1 !== result) {
              num1 = (num1 - num2) / 10 ** array2.length;
            }
            display.textContent = `${num1} ${operator} ${num2}`;
            for (let x = 0; x < 6; x++) {
              const operatorButtons2 = document.getElementById(
                `${operators[x]}`
              );
              operatorButtons2.addEventListener("click", () => {
                if (operator === "/" && num2 === 0) {
                  display.textContent = "You are a bad person";
                  result = num1;
                  calculator(result);
                  console.log(4);
                } else if (verify === 0) {
                  operator2 = operators[x];
                  result = operate(num1, num2, operator);
                  operation.textContent = `${num1} ${operator} ${num2} =`;
                  operation.style.cssText = "color: black; font-weight: 400";
                  display.textContent = `${result}`;
                  console.log(operator2);
                  calculator(result, operator2);
                  console.log(5);
                }
              });
            }
            equalButton.addEventListener(
              "click",
              () => {
                if (operator === "/" && num2 === 0) {
                  display.textContent = "You are a bad person";
                  result = num1;
                  calculator(result);
                  console.log(6);
                } else {
                  result = operate(num1, num2, operator);
                  operation.textContent = `${num1} ${operator} ${num2} =`;
                  operation.style.cssText = "color: black; font-weight: 400";
                  display.textContent = `${result}`;
                  calculator(result);
                  console.log(7);
                }
              },
              { passive: true }
            );
          });
        }
      }
    });
  }
};
calculator();
