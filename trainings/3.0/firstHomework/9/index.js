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
  let prefix = new Array(n);
  for (let i = 0; i < prefix.length; i++) {
    prefix[i] = new Array(m);
  }

  prefix[0][0] = matrix[0][0];

  for (let i = 1; i < n; i++) {
    prefix[i][0] = prefix[i - 1][0] + matrix[i][0];
  }

  for (let i = 1; i < m; i++) {
    prefix[0][i] = prefix[0][i - 1] + matrix[0][i];
  }

  for (let i = 1; i < n; i++) {
    for (let j = 1; j < n; j++) {
      prefix[i][j] =
        prefix[i - 1][j] +
        prefix[i][j - 1] -
        prefix[i - 1][j - 1] +
        matrix[i][j];
    }
  }

  for (let i = 0; i < requests.length; i++) {
    const [x1, y1, x2, y2] = requests[i];

    const result =
      prefix[x2 - 1][y2 - 1] -
      (x1 - 1 ? prefix[x1 - 2][y2 - 1] : 0) -
      (y1 - 1 ? prefix[x2 - 1][y1 - 2] : 0) +
      (x2 - 1 && y1 - 1 ? prefix[x1 - 2][y1 - 2] : 0);

    rl.output.write(result.toString() + "\n");
  }
};
