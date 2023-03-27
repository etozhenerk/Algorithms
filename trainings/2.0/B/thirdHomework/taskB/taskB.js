const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let lines = [];
rl.on("line", (line) => {
  lines.push(line);
}).on("close", () => {
  const [string] = lines;
  taskB(string.trim().split(" "));
});

/**
 *
 * @param {string[]} numbers Вводится список чисел. Все числа списка находятся на одной строке.
 * @returns {void} Выведите ответ на задачу.
 */

const taskB = (numbers) => {
  const set = new Set();

  for (let i = 0; i < numbers.length; i++) {
    const element = numbers[i];
    if (set.has(element)) {
      rl.output.write("YES\n");
    } else {
      set.add(element);
      rl.output.write("NO\n");
    }
  }
};
