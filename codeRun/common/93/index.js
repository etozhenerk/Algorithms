const fs = require("fs");
let [nr, numbers] = fs.readFileSync("input.txt", "utf8").trim().split("\n");

numbers = numbers
  .trim()
  .split(" ")
  .map((n) => parseInt(n));
[n, r] = nr
  .trim()
  .split(" ")
  .map((n) => parseInt(n));

/**
 *
 * @param {number} r
 * @param {number[]} numbers
 * @returns {void} 

*/

const findMonument = (r, numbers) => {
  let ans = 0;
  let right = 0;

  for (let left = 0; left < numbers.length; left++) {
    while (right < numbers.length && numbers[right] - numbers[left] <= r) {
      right++;
    }
    ans += numbers.length - right;
  }

  fs.writeFileSync("output.txt", ans.toString());
};

findMonument(r, numbers);
