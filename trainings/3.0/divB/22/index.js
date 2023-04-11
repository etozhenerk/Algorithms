const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const lines = [];
rl.on("line", (line) => {
  lines.push(line);
}).on("close", () => {
  const [nums] = lines;
  grasshopper(nums.split(" ").map((n) => parseInt(n)));
});

/**
 *
 * @param {number[]} nums два целых числа — N и k .
 * @returns {void} Выведите одно число — количество способов, которыми кузнечик может допрыгать из первой клетки до последней.
 */

const grasshopper = (nums) => {
  const [n, k] = nums;
  const dp = new Array(n).fill(0);
  dp[0] = 1;
  dp[1] = 1;
  for (let index = 2; index < n; index++) {
    let i = 1;

    while (i <= k && dp[index - i]) {
      dp[index] += dp[index - i];
      i++;
    }
  }

  rl.output.write(dp[dp.length - 1].toString());
};
