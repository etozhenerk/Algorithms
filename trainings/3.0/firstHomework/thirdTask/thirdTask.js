const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const lines = [];
rl.on("line", (line) => {
  lines.push(line);
}).on("close", () => {
  const [n, nArrey, k, kArrey] = lines;
  thirdTask(nArrey.split(" "), kArrey.split(" "));
});

/**
 

 * @param {string[]} nArrey  N целых неотрицательных чисел (не обязательно различных) — номера наклеек Диего. Все номера наклеек не превосходят 109.
 * @param {string[]} kArrey K целых чисел pi (0 ≤ pi ≤ 109), где pi — наименьший номер наклейки, не интересующий i-го коллекционера.

 * @returns {void}
 */

const thirdTask = (nArrey, kArrey) => {
  const set = new Set(nArrey);

  const setArray = [...set].map((a) => parseInt(a));

  setArray.sort((a, b) => a - b);

  kArrey.forEach((k) => {
    k = parseInt(k);
    let l = 0;
    let r = setArray.length - 1;
    while (l < r) {
      const m = Math.floor((l + r + 1) / 2);
      if (setArray[m] < k) {
        l = m;
      } else {
        r = m - 1;
      }
    }
    if (setArray[l] < k) {
      rl.output.write(`${l + 1}\n`);
    } else {
      rl.output.write("0\n");
    }
  });
};
