const fs = require("fs");
let [nk, numbers] = fs.readFileSync("input.txt", "utf8").trim().split("\n");

numbers = numbers
  .trim()
  .split(" ")
  .map((n) => parseInt(n));
[n, k] = nk
  .trim()
  .split(" ")
  .map((n) => parseInt(n));

/**
 *
 * @param {number} k
 * @param {number[]} numbers
 * @returns {void} 

*/

const findNumbers = (k, numbers) => {
  let ans = 0;
  let left = 0;
  let right = 0;
  let summ = numbers[0];
  while (left < numbers.length && right < numbers.length) {
    if (summ === k) {
      summ -= numbers[left];
      ans++;
      left++;
      right++;
      summ += numbers[right];
    } else if (summ > k) {
      summ -= numbers[left];
      left++;
    } else {
      right++;
      summ += numbers[right];
    }
  }

  fs.writeFileSync("output.txt", ans.toString());
};

findNumbers(k, numbers);
