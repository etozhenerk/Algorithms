const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const lines = [];
rl.on("line", (line) => {
  lines.push(line);
}).on("close", () => {
  const [expression] = lines;
  postfixFormResultFunction(expression);
});

/**
 *
 * @param {string} expression  выражение в постфиксной записи, содержащее цифры и операции +, -, *. Цифры и операции разделяются пробелами. В конце строки может быть произвольное количество пробелов.
 * @returns {void} значение записанного выражения.
 */

const postfixFormResultFunction = (expression) => {
  expression = expression.trim().split(" ");
  const stack = [];
  for (let index = 0; index < expression.length; index++) {
    const element = expression[index];
    if (!isNaN(parseInt(element))) {
      stack.push(parseInt(element));
    } else {
      if (stack.length > 1) {
        const second = stack.pop();
        const first = stack.pop();
        if (element === "+") {
          stack.push(first + second);
        } else if (element === "-") {
          stack.push(first - second);
        } else if (element === "*") {
          stack.push(first * second);
        }
      }
    }
  }

  rl.output.write(stack[0].toString());
};
