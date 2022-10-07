const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const lines = [];
rl.on("line", (line) => {
  lines.push(line);
}).on("close", () => {
  const [n, nums] = lines;
  const result = taskD(n, nums);

  rl.output.write(result);
});

/**
 *
 * @param {string} n число n (1 ≤ n ≤ 5 × 104).
 * @param {string} nums n чисел через пробел, числа не превосходят 109 по модулю.
 * @returns {string} текст, в котором осуществлены замены.
 */

const taskD = (n, nums) => {
  n = parseInt(n);
  nums = nums.split(" ").map(Number);

  const mid = n / 2;
  const list = {};
  let major = nums[0];

  for (let i = 0; i < nums.length; i++) {
    if (!list[nums[i]]) {
      list[nums[i]] = 0;
    }

    list[nums[i]] += 1;
  }

  for (const key in list) {
    if (list[key] >= mid) {
      major = key;
    }
  }

  return major.toString();
};
