/**
 * @param {number} n
 * @return {boolean}
 */
const isUglySlow = (n) => {
  if (n <= 0) {
    return false;
  }

  while (n !== 1) {
    if (n % 2 === 0) {
      n = n / 2;
      continue;
    } else if (n % 3 === 0) {
      n = n / 3;
      continue;
    } else if (n % 5 === 0) {
      n = n / 5;
      continue;
    } else {
      return false;
    }
  }

  return true;
};

const isUglyFast = (n) => {
  if (n <= 0) return false;

  if (n <= 5) return true;

  for (const divider of [2, 3, 5]) {
    if (n % divider === 0) {
      return isUgly(n / divider);
    }
  }
  return false;
};
