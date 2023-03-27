const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let lines = [];
rl.on("line", (line) => {
  lines.push(line);
}).on("close", () => {
  const [first, second] = lines;
  const result = taskA(first, second);

  rl.output.write(result.toString());
});

/**
 *
 * @param {string} first Вводятся два списка чисел. Все числа каждого списка находятся на отдельной строке.
 * @param {string} second
 * @returns {number} Выведите ответ на задачу.
 */

const taskA = (first, second) => {
  first = first.split(" ");
  second = second.split(" ");
  const set = new Set(first);

  let count = 0;

  for (let i = 0; i < second.length; i++) {
    const element = second[i];
    if (set.has(element)) {
      count++;
    }
  }

  return count;
};
