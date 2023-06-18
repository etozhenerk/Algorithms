const fs = require("fs");
let [numbers] = fs.readFileSync("input.txt", "utf8").split("\n");
numbers = numbers
  .trim()
  .split(" ")
  .map((n) => parseInt(n));
/**
 *
 * @param {number[]} numbers список чисел
 * @returns {void} 

*/

const maxCount = (numbers) => {
  let ans = 0;

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > numbers[i + 1] && numbers[i] > numbers[i - 1]) {
      ans++;
      i++;
    }
  }
  fs.writeFileSync("output.txt", ans.toString());
};

maxCount(numbers);
