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

const findPlace = (n, numbers) => {
  let ans = 0;
  let max = 0;
  let maxIndex = 0;
  const scoreToPlace = {};
  const indexToPlaces = {};
  const sorted = [...numbers].sort((a, b) => b - a);

  sorted.forEach((item, index) => {
    if (!scoreToPlace[item]) {
      scoreToPlace[item] = index + 1;
    }
  });

  numbers.forEach((item, index) => {
    const place = scoreToPlace[item];
    indexToPlaces[index] = place;
    if (item > max) {
      max = item;
      maxIndex = index;
    }
  });

  for (let i = 0; i < numbers.length; i++) {
    if (
      numbers[i] % 5 === 0 &&
      numbers[i] % 2 !== 0 &&
      i > maxIndex &&
      numbers[i + 1] < numbers[i]
    ) {
      if (ans) {
        ans = Math.min(indexToPlaces[i], ans);
      } else {
        ans = indexToPlaces[i];
      }
    }
  }

  fs.writeFileSync("output.txt", ans.toString());
};

findPlace(parseInt(n), numbers);
