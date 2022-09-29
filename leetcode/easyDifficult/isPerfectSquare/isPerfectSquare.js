/**
 * @param {number} num
 * @return {boolean}
 */
const isPerfectSquare = function (num) {
  let start = 1;
  let end = num;

  while (start <= end) {
    const mid = Math.ceil((start + end) / 2);
    if (mid ** 2 == num) {
      return true;
    }

    if (mid ** 2 > num) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }

  return false;
};
