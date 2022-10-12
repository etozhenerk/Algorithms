/**
 * @param {number} n
 * @return {number}
 */
const fib = (n) => {
  if (n === 1 || n === 0) {
    return n;
  }

  return fib(n - 1) + fib(n - 2);
};

const fibFast = (n) => {
  if (n === 0 || n === 1) {
    return n;
  }

  let arr = [0, 1];

  for (let i = 2; i <= n; i++) {
    arr.push(arr[i - 1] + arr[i - 2]);
  }

  return arr[arr.length - 1];
};
