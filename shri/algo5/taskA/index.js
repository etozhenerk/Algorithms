const fs = require("fs");

let [vNum, pNum] = fs.readFileSync("input.txt", "utf8").split("\n");

vNum = vNum.replace("\r", "");
pNum = pNum.replace("\r", "");
/**
 *
 * @param {string} vNum Вася
 * @param {string} pNum Петя
 * @returns {string} ответ на задачу.
 */

const getBullsAndCows = (vNum, pNum) => {
  let bulls = 0;
  let cows = 0;
  const vList = {};
  const pList = {};

  for (let i = 0; i < vNum.length; i++) {
    if (vNum[i] === pNum[i]) {
      bulls++;
    } else {
      if (!vList[vNum[i]]) {
        vList[vNum[i]] = 0;
      }

      vList[vNum[i]]++;
    }
  }

  for (let i = 0; i < pNum.length; i++) {
    if (!(vNum[i] === pNum[i])) {
      if (!pList[pNum[i]]) {
        pList[pNum[i]] = 0;
      }

      pList[pNum[i]]++;
    }
  }

  for (const key in vList) {
    if (pList[key]) {
      const min = Math.min(vList[key], pList[key]);
      cows += min;
    }
  }
  let ans = [bulls, cows].join("\n");

  return ans.toString();
};

const ans = getBullsAndCows(vNum, pNum);

fs.writeFileSync("output.txt", ans);
