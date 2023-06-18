const fs = require("fs");
let data = fs.readFileSync("input.txt", "utf8").trim().split("\n");

/**
 *
 * @param {string[]} data
 * @returns {void} 

*/

const findDegree = (data) => {
  const n = parseInt(data[0]);
  const mountainChain = data
    .slice(1, n + 1)
    .map((item) =>
      item.split(" ").map((item) => parseInt(item.replace("\r", "")))
    );

  const m = parseInt(data[n + 1]);
  const routes = data
    .slice(n + 2)
    .map((item) =>
      item.split(" ").map((item) => parseInt(item.replace("\r", "")))
    );

  const toRight = calcHeightToRight(mountainChain, n);
  const toLeft = calcHeightToLeft(mountainChain, n);

  let result = [];

  for (let i = 0; i < m; ++i) {
    let [start, finish] = routes[i].map((a) => a - 1);

    if (start <= finish) {
      result.push(toRight[finish] - toRight[start]);
    } else {
      result.push(toLeft[finish] - toLeft[start]);
    }
  }

  fs.writeFileSync("output.txt", result.join("\n"));
};

const calcHeightToRight = (mountainChain, n) => {
  const toRight = Array(n).fill(0);
  let y = mountainChain[0][1];

  for (let i = 1; i < n; ++i) {
    let previousY = y;
    y = mountainChain[i][1];

    if (y > previousY) {
      toRight[i] = toRight[i - 1] + y - previousY;
    } else {
      toRight[i] = toRight[i - 1];
    }
  }

  return toRight;
};

const calcHeightToLeft = (mountainChain, n) => {
  const toLeft = Array(n).fill(0);
  let y = mountainChain[n - 1][1];

  for (let i = n - 2; i >= 0; --i) {
    let previousY = y;
    y = mountainChain[i][1];

    if (y > previousY) {
      toLeft[i] = toLeft[i + 1] + y - previousY;
    } else {
      toLeft[i] = toLeft[i + 1];
    }
  }

  return toLeft;
};

findDegree(data);
