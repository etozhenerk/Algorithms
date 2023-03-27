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
  const result = taskС(string.trim().split(" "));

  rl.output.write(result);
});

/**
 *
 * @param {string[]} numbers Вводится список чисел. Все числа списка находятся на одной строке.
 * @returns {string} Выведите ответ на задачу.
 */

const taskС = (numbers) => {
  const list = {};
  const ans = [];

  for (let i = 0; i < numbers.length; i++) {
    const element = numbers[i];

    if (!list["+" + element]) {
      list["+" + element] = 0;
    }

    list["+" + element]++;
  }

  for (const key in list) {
    if (list[key] === 1) {
      ans.push(key.slice(1, key.length));
    }
  }

  return ans.join(" ");
};
