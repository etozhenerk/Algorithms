const fs = require("fs");

/**
 *
 * @param {string[]} str
 * @returns {number[][]}
 */

const numbersHandler = (str) =>
  str
    .filter((item) => !!item)
    .map((item) => item.split(" ").map((i) => parseInt(i)));

let [lnm, ...numbers] = fs.readFileSync("input.txt", "utf8").split("\n");

const numbersArr = numbersHandler(numbers);

/**
 *
 * @param {number[][]} numbers точки и носки
 * @returns {string} ответ на задачу.
 */

const getWidth = (numbers) => {
  const counts = {};
  const events = [];
  const requests = [];
  let count = 0;

  for (let i = 0; i < numbers.length; i++) {
    const element = numbers[i];
    if (element.length > 1) {
      events.push([element[0], -1]);
      events.push([element[1], 1]);
    } else {
      events.push([element[0], 0]);
      requests.push(element[0]);
    }
  }

  events.sort((a, b) => a[0] - b[0] || a[1] - b[1]);

  for (let i = 0; i < events.length; i++) {
    const element = events[i];
    if (element[1] === -1) {
      count += 1;
    } else if (element[1] == 1) {
      count -= 1;
    } else {
      counts[element[0]] = count;
    }
  }

  const ans = requests.map((item) => counts[item]).join("\n");

  return ans;
};

const ans = getWidth(numbersArr);

fs.writeFileSync("output.txt", ans);
