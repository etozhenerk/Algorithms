const fs = require("fs");
let [n, tShirts, m, shorts] = fs
  .readFileSync("input.txt", "utf8")
  .trim()
  .split("\n");

tShirts = tShirts
  .trim()
  .split(" ")
  .map((n) => parseInt(n));

shorts = shorts
  .trim()
  .split(" ")
  .map((n) => parseInt(n));
/**
 *
 * @param {number} n
 * @param {number[]} tShirts
 * @param {number} m
 * @param {number[]} shorts
 * @returns {void} 

*/

const findPair = (n, tShirts, m, shorts) => {
  let tShirt = tShirts[0];
  let short = shorts[0];
  let right = 0;
  let diff = Math.abs(tShirts[0] - shorts[0]);

  for (let left = 0; left < tShirts.length; left++) {
    while (right < shorts.length) {
      const currentDiff = Math.abs(tShirts[left] - shorts[right]);

      if (currentDiff < diff) {
        diff = currentDiff;
        tShirt = tShirts[left];
        short = shorts[right];

        if (shorts[right] > tShirts[left]) {
          break;
        }
      } else if (shorts[right] > tShirts[left]) {
        break;
      }
      right++;
    }
  }

  fs.writeFileSync("output.txt", [tShirt, short].join(" "));
};

findPair(n, tShirts, m, shorts);
