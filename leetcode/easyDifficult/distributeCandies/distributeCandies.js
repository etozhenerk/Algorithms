/**
 * @param {number[]} candyType
 * @return {number}
 */
const distributeCandies = (candyType) => {
  const n = candyType.length / 2;
  const set = new Set(candyType);

  return Math.min(n, set.size);
};
