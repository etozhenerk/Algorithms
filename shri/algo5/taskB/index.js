const fs = require("fs");

let [sk, str] = fs.readFileSync("input.txt", "utf8").split("\n");

str = str.replace("\r", "");

let [s, k] = sk.split(" ").map((i) => parseInt(i));
/**
 *
 * @param {number} k минимальное количество каждого из символов в искомой подстроке
 * @param {string} str строка
 * @returns {string} ответ на задачу.
 */

const getMaxStr = (k, str) => {
  let ans = 0;
  let l = 0;
  let r = str.length - 1;
  const letters = {};

  for (let i = 0; i < str.length; i++) {
    const letter = str[i];
    if (!letters[letter]) {
      letters[letter] = 0;
    }
    letters[letter]++;
  }

  while (l <= r && l < str.length && r < str.length) {
    let min = Infinity;
    for (const key in letters) {
      const element = letters[key];
      if (element < min && element > 0) {
        min = element;
      }
    }

    if (min >= k) {
      break;
    }
    const rCount = letters[str[r]];
    const lCount = letters[str[l]];
    if (rCount < k) {
      letters[str[r]]--;
      r--;
    } else {
      letters[str[l]]--;
      l++;
    }
  }
  ans = str.slice(l, r + 1).length;

  console.log(ans);

  return ans.toString();
};

const ans = getMaxStr(k, str);

fs.writeFileSync("output.txt", ans);
