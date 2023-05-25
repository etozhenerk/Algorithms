const fs = require("fs");
let [a, b, c] = fs
  .readFileSync("input.txt", "utf8")
  .trim()
  .split("\n")
  .map(BigInt);

/**
 *
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @returns {void} 

*/

const findN = (a, b, c) => {
  let l = 0n;
  let r = 2n * a + b;

  while (l < r) {
    let m = (l + r) / 2n;
    if (2n * (a * 2n + b * 3n + c * 4n + m * 5n) >= 7n * (a + b + c + m)) {
      r = m;
    } else {
      l = m + 1n;
    }
  }

  fs.writeFileSync("output.txt", `${l}`);
};

findN(a, b, c);
