const fs = require("fs");

const getNumbers = (arr) =>
  arr
    .trim()
    .split(" ")
    .map((n) => parseInt(n));

let [nk, nArr, kArr] = fs.readFileSync("input.txt", "utf8").trim().split("\n");

nArr = getNumbers(nArr);
kArr = getNumbers(kArr);

/**
 *
 * @param {number[]} nArr
 * @param {number[]} nArr
 * @returns {void} 

*/

const binSearch = (nArr, kArr) => {
  const sortedNArr = [...nArr].sort((a, b) => a - b);
  let ans = "";
  for (let i = 0; i < kArr.length; i++) {
    const element = kArr[i];
    let l = 0;
    let r = sortedNArr.length - 1;

    while (l < r) {
      let m = Math.floor((l + r) / 2);

      if (sortedNArr[m] >= element) {
        r = m;
      } else {
        l = m + 1;
      }
    }

    if (sortedNArr[l] === element) {
      ans += "YES\n";
    } else {
      ans += "NO\n";
    }
  }

  fs.writeFileSync("output.txt", ans);
};

binSearch(nArr, kArr);
