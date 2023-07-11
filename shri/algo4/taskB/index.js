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

let [n, ...days] = fs.readFileSync("input.txt", "utf8").split("\n");

const daysArr = numbersHandler(days);

/**
 *
 * @param {number[][]} daysArr номера дней
 * @returns {string} ответ на задачу.
 */

const getDays = (daysArr) => {
  const events = [];
  let lastDay = 0;

  for (let i = 0; i < daysArr.length; i++) {
    const element = daysArr[i];
    events.push([element[0], element[1], i]);
  }

  events.sort((a, b) => a[0] - b[0] || a[1] - b[1] || a[2] - b[2]);

  for (let i = 0; i < events.length; i++) {
    if (lastDay >= events[i][1]) {
      events[i][0] = -1;
      events[i][1] = -1;
    } else {
      if (lastDay < events[i][0]) {
        lastDay = events[i][1];
      } else if (lastDay >= events[i][0]) {
        events[i][0] = lastDay + 1;
        lastDay = events[i][1];
      }
    }
  }

  events.sort((a, b) => a[2] - b[2]);

  const ans = events.map((item) => [item[0], item[1]].join(" ")).join("\n");

  return ans;
};

const ans = getDays(daysArr);

fs.writeFileSync("output.txt", ans);
