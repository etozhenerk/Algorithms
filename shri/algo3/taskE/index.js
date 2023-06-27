const fs = require("fs");
let [nk, numbers] = fs.readFileSync("input.txt", "utf8").trim().split("\n");
const [n, k] = nk
  .trim()
  .split(" ")
  .map((item) => parseInt(item));

numbers = numbers
  .trim()
  .split(" ")
  .map((n) => parseInt(n));
/**
 *
 * @param {number} n количество ингредиентов.
 * @param {number} n количество зелий.
 * @param {number[]} numbers полезность ингредиентов.
 * @returns {void} максимальную суммарную полезность зелий
 */

const getMax = (n, k, numbers) => {
  const sorted = [...numbers.sort(), 0].reverse();
  const pref = new Array(n + 1).fill(0);

  const check = (m) => {
    let ans = 0;
    let cnt = 0;

    for (let i = 1; i < n + 1; i++) {
      if (sorted[i] < m) {
        break;
      }

      cnt = cnt + 1;
      ans = ans + sorted[i];
    }

    let j = 2;

    while (j <= n && sorted[1] + sorted[j] >= m) {
      j = j + 1;
    }

    for (let i = 1; i < n + 1; i++) {
      if (i + 1 >= j) {
        break;
      }

      while (j - 1 > i && sorted[i] + sorted[j - 1] < m) {
        j = j - 1;
      }
      cnt = cnt + (j - i - 1);
      ans = ans + (pref[j - 1] - pref[i] + sorted[i] * (j - i - 1));
    }

    if (cnt >= k) {
      return ans - (cnt - k) * m;
    } else {
      return 1e18;
    }
  };

  for (let i = 1; i < sorted.length; i++) {
    pref[i] = sorted[i] + pref[i - 1];
  }
  let l = -1e9;
  let r = 1e9;

  while (l < r) {
    let m = Math.floor((l + r + 1) / 2);
    if (check(m) !== 1e18) {
      l = m;
    } else {
      r = m - 1;
    }
  }

  const ans = check(l);
  fs.writeFileSync("output.txt", ans.toString());
};

getMax(n, k, numbers);
