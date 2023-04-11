const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const lines = [];
rl.on("line", (line) => {
  lines.push(line);
}).on("close", () => {
  const [nm] = lines;
  knightsMove(nm);
});

/**
 *
 * @param {string} nm Входной файл содержит два натуральных числа N и M
 * @returns {void} В выходной файл выведите единственное число — количество способов добраться конём до правого нижнего угла доски.
 */

const knightsMove = (nm) => {
  [n, m] = nm.split(" ").map((i) => parseInt(i));

  const dp = [];

  for (let i = 0; i <= n + 1; i++) {
    dp[i] = [];
    for (let j = 0; j <= m + 1; j++) {
      dp[i][j] = 0;
    }
  }

  dp[1][1] = 1;

  for (let i = 2; i <= n; i++) {
    for (let j = 2; j <= m; j++) {
      dp[i][j] = dp[i - 1][j - 2] + dp[i - 2][j - 1];
    }
  }

  rl.output.write(dp[n][m].toString());
};
