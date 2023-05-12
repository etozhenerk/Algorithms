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

const isAscendingList = (numbers) => {
  let ans = "YES";

  for (let i = 0; i < numbers.length - 1; i++) {
    if (numbers[i + 1] <= numbers[i]) {
      ans = "NO";
    }
  }
  fs.writeFileSync("output.txt", ans);
};

isAscendingList(numbers);
