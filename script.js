const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;
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
    default:
      console.log("ERROR!");
      break;
  }
};
// const num1 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
// const num2 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const operators = ["+", "-", "*", "/"];
const display = document.getElementById("display");

// for (let index = 0; index <= 9; index++) {
//   const numberButtons = document.getElementById(`${index}`);
//   if (index < 4) {
//     const operatorButtons = document.getElementById(operators[index]);
//     operatorButtons.addEventListener(
//       "click",
//       () => (display.textContent = `${operators[index]}`)
//     );
//   }
//   numberButtons.addEventListener("click", () => {
//     display.textContent = `${index}`;
//     const numberButtons2 = document.getElementById(`${index} a`);
//     numberButtons2.addEventListener("click", () => {
//       display.textContent = `${index} a`;
//     });
//   });
// }

for (let index = 0; index <= 9; index++) {
  const numberButtons = document.getElementById(`${index}`);
  const equalButton = document.getElementById("equal__button");
  numberButtons.addEventListener("click", () => {
    display.textContent = `${index}`;
    const num1 = parseInt(`${index}`);
    for (let i = 0; i < 4; i++) {
      const operatorButtons = document.getElementById(`${operators[i]}`);
      operatorButtons.addEventListener("click", () => {
        const operator = `${operators[i]}`;
        display.textContent = `${num1} ${operator}`;
        for (let j = 0; j <= 9; j++) {
          const numberButtons2 = document.getElementById(`${j}`);
          numberButtons2.addEventListener("click", () => {
            const num2 = parseInt(`${j}`);
            display.textContent = `${num1} ${operator} ${num2}`;
            equalButton.addEventListener("click", () => {
              display.textContent = `${operate(num1, num2, operator)}`;
            });
          });
        }
      });
    }
  });
}
