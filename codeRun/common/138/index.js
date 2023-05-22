const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const lines = [];
rl.on("line", (line) => {
  lines.push(line);
}).on("close", () => {
  const [n, m, k] = lines[0].split(" ").map((n) => parseInt(n));
  const matrix = [];
  const requests = [];

  for (let i = 1; i < lines.length; i++) {
    const element = lines[i].split(" ").map((n) => parseInt(n));
    if (i <= n) {
      matrix.push(element);
    } else {
      requests.push(element);
    }
  }
  prefixFunction(n, m, matrix, requests);
});

/**
 *
 * @param {number} n размеры матрицы
 * @param {number} m размеры матрицы
 * @param {number[][]} matrix матрица
 * @param {number[][]} requests K строк содержат по 4 целых числа, разделенных пробелом x1 y1 x2 y2 — запрос на сумму элементов матрице в прямоугольнике
 * @returns {void} Для каждого запроса на отдельной строке выведите его результат — сумму всех чисел в элементов матрице в прямоугольнике
 */

const prefixFunction = (n, m, matrix, requests) => {
  const prefixSum = new Array(n).fill(null).map(() => new Array(m));

  for (let x = 0; x < n; ++x) {
    for (let y = 0; y < m; ++y) {
      prefixSum[x][y] =
        matrix[x][y] +
        (prefixSum[x - 1]?.[y] ?? 0) +
        (prefixSum[x][y - 1] ?? 0) - //
        (prefixSum[x - 1]?.[y - 1] ?? 0);
    }
  }

  let sum = 0;

  for (const rectangle of requests) {
    const [x1, y1, x2, y2] = rectangle.map((n) => n - 1);

    sum =
      prefixSum[x2][y2] -
      (prefixSum[x1 - 1]?.[y2] ?? 0) -
      (prefixSum[x2][y1 - 1] ?? 0) + //
      (prefixSum[x1 - 1]?.[y1 - 1] ?? 0);

    rl.output.write(sum.toString() + "\n");
  }
};
