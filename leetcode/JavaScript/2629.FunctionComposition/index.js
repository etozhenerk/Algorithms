/**
 * @param {Function[]} functions
 * @return {Function}
 */
const compose = function (functions) {
  return function (x) {
    let result = x;

    for (let i = functions.length - 1; i >= 0; i--) {
      const element = functions[i];
      result = element(result);
    }

    return result;
  };
};
