/**
 * @param {number} n
 * @return {string[]}
 */
const fizzBuzz = (n) => {
  const ans = [];

  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      ans.push("FizzBuzz");
    } else if (i % 5 === 0) {
      ans.push("Buzz");
    } else if (i % 3 === 0) {
      ans.push("Fizz");
    } else {
      ans.push(i.toString());
    }
  }

  return ans;
};
