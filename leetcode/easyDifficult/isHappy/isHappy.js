/**
 * @param {number} n
 * @return {boolean}
 */
const isHappy = (n) => {
  const set = new Set();
  let sum = 0;
  let numbers = n.toString().split("");
  while (sum !== 1) {
    sum = numbers.reduce((acc, i) => acc + parseInt(i) ** 2, 0);
    numbers = sum.toString().split("");
    if (set.has(sum)) {
      return false;
    }
    set.add(sum);
  }

  return true;
};
