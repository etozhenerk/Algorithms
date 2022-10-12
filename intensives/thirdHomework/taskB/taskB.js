const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const lines = [];
rl.on("line", (line) => {
  lines.push(line);
}).on("close", () => {
  const [n, ages] = lines;
  const result = taskB(ages);

  rl.output.write(result);
});

/**
 *
 * @param {string} ages n чисел — возраст людей. Возраст находится в промежутке от 1 до 120.
 * @returns {string} суммарное количество приглашений.
 */

const taskB = (ages) => {
  ages = ages
    .split(" ")
    .map(Number)
    .sort((a, b) => a - b);

  let ans = 0;
  let l = 0;
  let r = 0;

  for (let i = 0; i < ages.length; i++) {
    while (l < ages.length && ages[l] <= 0.5 * ages[i] + 7) {
      l++;
    }
    while (r < ages.length && ages[r] <= ages[i]) {
      r++;
    }
    if (r > l + 1) {
      ans += r - l - 1;
    }
  }

  return ans.toString();
};
