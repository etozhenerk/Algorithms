const fs = require("fs");

/**
 *
 * @param {string} str
 * @returns {number[]}
 */

const inputHandler = (str) =>
  str
    .trim()
    .split(" ")
    .map((item) => parseInt(item))
    .sort((a, b) => a - b);

let [n, groups, m, counts] = fs.readFileSync("input.txt", "utf8").split("\n");

n = parseInt(n);
m = parseInt(m);

groups = inputHandler(groups);
counts = inputHandler(counts);

/**
 *
 * @param {number} groups численность групп
 * @param {number} counts вместимость аудиторий
 * @returns {string} ответ на задачу.
 */

const getMaxGrops = (groups, counts) => {
  let i = 0;
  let j = 0;
  let ans = 0;

  while (i < groups.length && j < counts.length) {
    if (groups[i] <= counts[j]) {
      ans++;
      i++;
      j++;
    } else {
      j++;
    }
  }
  return ans.toString();
};

const ans = getMaxGrops(groups, counts);

fs.writeFileSync("output.txt", ans);
