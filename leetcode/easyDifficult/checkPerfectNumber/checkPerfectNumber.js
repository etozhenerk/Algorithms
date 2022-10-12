/**
 * @param {number} num
 * @return {boolean}
 */
const checkPerfectNumber = (num) => {
  let ans = 0;

  if (num === 1) {
    return false;
  }

  for (let i = 0; i <= num / 2; i++) {
    if (num % i === 0) {
      ans += i;
    }
  }

  return num === ans;
};
