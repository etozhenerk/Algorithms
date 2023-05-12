const fs = require("fs");
let [n, numbers, x] = fs.readFileSync("input.txt", "utf8").split("\n");
numbers = numbers
  .trim()
  .split(" ")
  .map((n) => parseInt(n));
/**
 *
 * @param {number[]} numbers целые числа, не превосходящие по модулю 1000
 * @param {number} x целое число x, не превосходящее по модулю 1000
 * @returns {void} 

*/

const findClosest = (numbers, x) => {
  let ans = numbers[0];
  let dist = Math.abs(x - numbers[0]);

  for (let i = 0; i < numbers.length; i++) {
    if (Math.abs(x - numbers[i]) < dist) {
      ans = numbers[i];
      dist = Math.abs(x - numbers[i]);
    }
  }

  fs.writeFileSync("output.txt", ans.toString());
};

findClosest(numbers, parseInt(x));
