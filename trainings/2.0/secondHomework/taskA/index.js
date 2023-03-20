const fs = require("fs");
let array = fs
  .readFileSync("input.txt", "utf8")
  .split("\n")
  .filter((item) => item !== "")
  .map((item) => parseInt(item));

/**
 *
 * @param {number[]} array Вводится последовательность целых чисел, оканчивающаяся числом 0 (само число 0 в последовательность не входит).
 * @returns {void} Выведите ответ на задачу.
 */

const maxCount = (array) => {
  const max = Math.max(...array);

  let cnt = 0;

  array.forEach((item) => {
    if (item === max) {
      cnt++;
    }
  });

  fs.writeFileSync("output.txt", cnt.toString());
};

maxCount(array);
