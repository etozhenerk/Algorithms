const fs = require("fs");
let [first, second] = fs.readFileSync("input.txt", "utf8").trim().split("\n");

/**
 *
 * @param {string} first
 * @param {string} second
 * @returns {void} 

*/

const findDegree = (first, second) => {
  const secondSet = new Set();
  let ans = 0;

  for (let i = 0; i < second.length - 1; i++) {
    const element = second[i] + second[i + 1];

    secondSet.add(element);
  }

  for (let i = 0; i < first.length - 1; i++) {
    const element = first[i] + first[i + 1];
    if (secondSet.has(element)) {
      ans++;
    }
  }

  fs.writeFileSync("output.txt", ans.toString());
};

findDegree(first, second);
