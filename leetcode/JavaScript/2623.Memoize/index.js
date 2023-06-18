/**
 * @param {Function} fn
 */
function memoize(fn) {
  const memo = {};
  return function (...args) {
    const key = args.join(" ");
    if (memo[key] === undefined) {
      memo[key] = fn(...args);
    }

    return memo[key];
  };
}
