const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const lines = [];
rl.on("line", (line) => {
  lines.push(line);
}).on("close", () => {
  const [n] = lines;
  threeUnits(parseInt(n));
});

/**
 *
 * @param {number} n натуральное число N, не превосходящее 35.
 * @returns {void} Выведите количество искомых последовательностей
 */

const threeUnits = (n) => {
  const dp = new Array(n + 1);
  dp[1] = 2;
  dp[2] = 4;
  dp[3] = 7;

  for (let i = 4; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2] + dp[i - 3];
  }

  rl.output.write(dp[n].toString());
};
