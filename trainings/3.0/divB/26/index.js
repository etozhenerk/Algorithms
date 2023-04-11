const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const lines = [];
rl.on("line", (line) => {
  lines.push(line);
}).on("close", () => {
  const [nm, ...data] = lines;
  theCheapestWay(nm, data);
});

/**
 *
 * @param {string} nm N и M — размеры таблицы
 * @param {string[]} data  N строк по M чисел в каждой — размеры штрафов в килограммах за прохождение через соответствующие клетки (числа от 0 до 100).
 * @returns {void} Выведите минимальный вес еды в килограммах, отдав которую можно попасть в правый нижний угол.
 */

const theCheapestWay = (nm, data) => {
  data = data.map((item) => item.split(" ").map((i) => parseInt(i)));
  [n, m] = nm.split(" ").map((i) => parseInt(i));

  for (let i = 1; i < n; i++) {
    data[i][0] += data[i - 1][0];
  }

  for (let i = 1; i < m; i++) {
    data[0][i] += data[0][i - 1];
  }

  for (let i = 1; i < n; i++) {
    for (let j = 1; j < m; j++) {
      let a1 = data[i - 1][j];
      let a2 = data[i][j - 1];
      data[i][j] += Math.min(a1, a2);
    }
  }

  rl.output.write(data[n - 1][m - 1].toString());
};
