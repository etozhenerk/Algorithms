const fs = require("fs");
let [nk, ...numbers] = fs.readFileSync("input.txt", "utf8").trim().split("\n");
const [n, k] = nk.trim().split(" ").map(parseInt);
numbers = numbers.map((n) => parseInt(n));
/**
 *
 * @param {number} n количество лампочек.
 * @param {number[]} numbers количество лампочек каждого из k цветов.
 * @returns {void} В первой строке выведите максимальное количество гирлянд. В следующих n строках выведите описание гирлянды: в каждой строке выведите номер цвета лампочки, находящейся в гирлянде на очередном месте. Если возможных ответов несколько — выведите любой из них.
 */

const getMaxGarlands = (n, numbers) => {
  let l = 1;
  let r = Math.max(...numbers);

  while (l < r) {
    let m = Math.floor((l + r + 1) / 2);

    if (check(m, numbers, n)) {
      l = m;
    } else {
      r = m - 1;
    }
  }
  const indexes = [];
  for (let i = 0; i < numbers.length; i++) {
    const element = Math.floor(numbers[i] / l);
    for (let j = 0; j < element; j++) {
      if (indexes.length < n) {
        indexes.push(i + 1);
      }
    }
  }

  fs.writeFileSync("output.txt", `${l}\n${indexes.join("\n")}`);
};

const check = (m, numbers, n) => {
  const result = numbers
    .map((item) => Math.floor(item / m))
    .filter((item) => item !== 0)
    .reduce((prev, next) => prev + next, 0);
  return result >= n;
};

getMaxGarlands(n, numbers);
