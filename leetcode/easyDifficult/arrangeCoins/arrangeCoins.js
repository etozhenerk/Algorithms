/**
 * @param {number} n
 * @return {number}
 */
const arrangeCoins = (n) => {
  let coins = 0;
  let ans = 0;

  for (let i = 1; i <= n; i++) {
    if (coins + i > n) {
      return ans;
    } else {
      coins += i;
      ans++;
    }
  }

  return n;
};
