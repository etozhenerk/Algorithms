const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const lines = [];
rl.on("line", (line) => {
  lines.push(line);
}).on("close", () => {
  const [n, data] = lines;
  nails(data);
});

/**
 *
 * @param {string} data  N чисел — координаты всех гвоздиков (неотрицательные целые числа, не превосходящие 10000).
 * @returns {void} Выведите единственное число — минимальную суммарную длину всех ниточек.
 */

const nails = (data) => {
  data = [
    0,
    ...data
      .trim()
      .split(" ")
      .map((i) => parseInt(i))
      .sort((a, b) => a - b),
  ];
  const dp = new Array(data.length).fill(0);

  dp[2] = data[2] - data[1];
  if (data.length > 3) dp[3] = data[3] - data[1];

  for (let i = 4; i < data.length; i++) {
    dp[i] = Math.min(dp[i - 1], dp[i - 2]) + data[i] - data[i - 1];
  }

  rl.output.write(dp[dp.length - 1].toString());
};
