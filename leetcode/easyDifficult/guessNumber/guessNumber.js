/**
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * const guess = function(num) {}
 */

/**
 * @param {number} n
 * @return {number}
 */

const guessNumber = function (n) {
  let start = 1;
  let end = n;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    const guessNum = guess(mid);
    if (guessNum === 0) {
      return mid;
    }
    if (guessNum > 0) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
};
