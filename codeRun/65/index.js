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

const sumOfThreeNumbers = (numbers) => {
  if (isNaN(numbers[0])) {
    fs.writeFileSync("output.txt", "");
  } else if (numbers.length <= 3) {
    fs.writeFileSync("output.txt", numbers.join(" "));
  } else {
    let max1 = -Infinity;
    let max2 = -Infinity;
    let max3 = -Infinity;
    let min2 = Infinity;
    let min1 = Infinity;

    let ans = [];

    for (let i = 0; i < numbers.length; i++) {
      if (numbers[i] > max1) {
        [max1, max2, max3] = [numbers[i], max1, max2];
      } else if (numbers[i] > max2) {
        [max2, max3] = [numbers[i], max2];
      } else if (numbers[i] > max3) {
        max3 = numbers[i];
      }
      if (numbers[i] < min1) {
        [min2, min1] = [min1, numbers[i]];
      } else if (numbers[i] < min2) {
        min2 = numbers[i];
      }
    }

    if (min1 * min2 * max1 > max1 * max2 * max3) {
      ans = [min1, min2, max1];
    } else {
      ans = [max1, max2, max3];
    }

    fs.writeFileSync("output.txt", ans.join(" "));
  }
};

sumOfThreeNumbers(numbers);
