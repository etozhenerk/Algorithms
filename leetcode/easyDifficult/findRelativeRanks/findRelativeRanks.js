/**
 * @param {number[]} score
 * @return {string[]}
 */
const findRelativeRanks = function (score) {
  const list = {};
  [...score]
    .sort((a, b) => b - a)
    .forEach((item, i) => {
      if (i === 0) {
        list[item] = "Gold Medal";
      } else if (i === 1) {
        list[item] = "Silver Medal";
      } else if (i === 2) {
        list[item] = "Bronze Medal";
      } else {
        list[item] = (i + 1).toString();
      }
    });

  const ans = score.map((item) => list[item]);

  return ans;
};
