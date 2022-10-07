/**
 * @param {number[]} timeSeries
 * @param {number} duration
 * @return {number}
 */
const findPoisonedDuration = (timeSeries, duration) => {
  let res = duration;
  for (let i = 1; i < timeSeries.length; i++) {
    res += Math.min(timeSeries[i] - timeSeries[i - 1], duration);
  }
  return res;
};
