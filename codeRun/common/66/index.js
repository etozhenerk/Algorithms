const fs = require("fs");
let [numbers] = fs.readFileSync("input.txt", "utf8").split("\n");
numbers = numbers
  .trim()
  .split(" ")
  .map((n) => parseInt(n));
/**
 *
 * @param {number[]} numbers
 * @returns {void} 

*/

const sumOfTwoNumbers = (numbers) => {
  let max1 = -Infinity;
  let max2 = -Infinity;
  let min2 = Infinity;
  let min1 = Infinity;

  let ans = [];

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > max1) {
      [max1, max2] = [numbers[i], max1];
    } else if (numbers[i] > max2) {
      max2 = numbers[i];
    }
    if (numbers[i] < min1) {
      [min2, min1] = [min1, numbers[i]];
    } else if (numbers[i] < min2) {
      min2 = numbers[i];
    }
  }

  if (min1 * min2 > max1 * max2) {
    ans = [min1, min2];
  } else {
    ans = [max2, max1];
  }

  fs.writeFileSync("output.txt", ans.join(" "));
};

sumOfTwoNumbers(numbers);
