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
  maxCost(nm, data);
});

/**
 *
 * @param {string} nm В первой строке входных данных записаны два натуральных числа N и M, не превосходящих 100 — размеры таблицы.
 * @param {string[]} data  Далее идет N строк, каждая из которых содержит M чисел, разделенных пробелами — описание таблицы. Все числа в клетках таблицы целые и могут принимать значения от 0 до 100.
 * @returns {void} Первая строка выходных данных содержит максимальную возможную сумму, вторая — маршрут, на котором достигается эта сумма. Маршрут выводится в виде последовательности, которая должна содержать N-1 букву D, означающую передвижение вниз и M-1 букву R, означающую передвижение направо. Если таких последовательностей несколько, необходимо вывести ровно одну (любую) из них.
 */

const maxCost = (nm, data) => {
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
      data[i][j] += Math.max(a1, a2);
    }
  }

  let i = n - 1;
  let j = m - 1;
  const path = [];

  while (i !== 0 || j !== 0) {
    if (i > 0 && j > 0) {
      if (data[i - 1][j] > data[i][j - 1]) {
        path.push("D");
        i--;
      } else {
        path.push("R");
        j--;
      }
    } else if (i > 0) {
      path.push("D");
      i--;
    } else if (j > 0) {
      path.push("R");
      j--;
    }
  }
  path.reverse();

  rl.output.write(data[n - 1][m - 1].toString() + "\n");
  rl.output.write(path.join(" "));
};
