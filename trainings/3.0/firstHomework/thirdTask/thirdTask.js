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
  const set = new Set();

  nArrey.forEach((n) => {
    set.add(Number(n));
  });

  const setArray = [...set];
  setArray.sort((a, b) => a - b);

  kArrey.forEach((k) => {
    const i = lbinsearch(0, setArray.length - 1, check, [setArray, Number(k)]);
    if (setArray[i] < k) {
      rl.output.write((i + 1).toString());
      rl.output.write("\n");
    } else {
      rl.output.write("0");
      rl.output.write("\n");
    }
  });
};

const check = (index, params) => {
  const [seq, x] = params;
  return seq[index] < x;
};

const lbinsearch = (l, r, check, checkparams) => {
  while (l < r) {
    const m = Math.floor((l + r + 1) / 2);
    if (check(m, checkparams)) {
      l = m;
    } else {
      r = m - 1;
    }
  }
  return l;
};
