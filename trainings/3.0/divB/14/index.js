const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const lines = [];
rl.on("line", (line) => {
  lines.push(line);
}).on("close", () => {
  const [k, numbers] = lines;
  sortFunction(numbers);
});

/**
 *
 * @param {string} numbers  номера вагонов в порядке от головы поезда, едущего по пути 1 в сторону тупика. Вагоны пронумерованы натуральными числами от 1 до N, каждое из которых встречается ровно один раз.
 * @returns {void} Если сделать так, чтобы вагоны шли в порядке от 1 до N, считая от головы поезда, когда поезд поедет по пути 2 из тупика, можно, выведите сообщение YES, если это сделать нельзя, выведите NO.
 */

const sortFunction = (numbers) => {
  numbers = numbers.split(" ").map((n) => parseInt(n));
  const stack = [];
  const line2 = [];

  for (let index = 0; index < numbers.length; index++) {
    stack.push(numbers[index]);

    while (stack.length !== 0 && stack[stack.length - 1] === line2.length + 1) {
      line2.push(stack.pop());
    }
  }

  if (stack.length === 0) {
    rl.output.write("YES");
  } else {
    rl.output.write("NO");
  }
};
