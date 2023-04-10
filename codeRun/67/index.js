const fs = require("fs");
let [n, numbers] = fs.readFileSync("input.txt", "utf8").split("\n");
numbers = numbers
  .trim()
  .split(" ")
  .map((n) => parseInt(n));
/**
 *
 * @param {number} n количество элементов исходной последовательности (1 ≤ N ≤ 100)
 * @param {number[]} numbers элементы этой последовательности, натуральные числа от 1 до 9
 * @returns {void} 

*/

const polindrome = (n, numbers) => {
  const reverse = [...numbers].reverse();

  const stack = [];
  let ans = "";

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] === reverse[0]) {
      let isPalindrome = true;

      for (let j = i; j < numbers.length; j++) {
        if (numbers[j] !== reverse[j - i]) {
          isPalindrome = false;
          break;
        }
      }

      if (!isPalindrome) {
        stack.push(numbers[i]);
      } else {
        break;
      }
    } else {
      stack.push(numbers[i]);
    }
  }

  if (stack.length === 0) {
    ans = "0";
  } else {
    ans = `${stack.length}\n${[...stack].reverse().join(" ")}`;
  }

  fs.writeFileSync("output.txt", ans);
};

polindrome(parseInt(n), numbers);
