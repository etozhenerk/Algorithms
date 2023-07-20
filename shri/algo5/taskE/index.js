const fs = require("fs");

/**
 *
 * @param {string[]} str
 * @returns {number[][]}
 */

const numbersHandler = (str) =>
  str
    .split(" ")
    .filter((item) => !!item)
    .map((item) => parseInt(item));

let [n, numbers] = fs.readFileSync("input.txt", "utf8").split("\n");
const numbersArr = numbersHandler(numbers);

/**
 *
 * @param {number[]} numbersArr высоты столбцов
 * @returns {string} ответ на задачу.
 */

const getBlocks = (numbersArr) => {
  let ans = 0;
  let max = 0;
  let maxIndex = 0;

  for (let i = 0; i < numbersArr.length; i++) {
    const element = numbersArr[i];
    if (element > max) {
      max = element;
      maxIndex = i;
    }
  }

  const left = numbersArr.slice(0, maxIndex);
  const right = numbersArr.slice(maxIndex + 1, numbersArr.length);
  let maxLeft = 0;
  let maxRight = 0;

  for (let i = 0; i < left.length; i++) {
    const element = left[i];
    if (element > maxLeft) {
      maxLeft = element;
    } else {
      ans += maxLeft - element;
    }
  }
  for (let i = right.length - 1; i >= 0; i--) {
    const element = right[i];
    if (element > maxRight) {
      maxRight = element;
    } else {
      ans += maxRight - element;
    }
  }
  return ans.toString();
};

const ans = getBlocks(numbersArr);

fs.writeFileSync("output.txt", ans);
