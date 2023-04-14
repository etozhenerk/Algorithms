/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
const addStrings = function (num1, num2) {
  let i = num1.length - 1;
  let j = num2.length - 1;
  let carry = 0;
  let sum = "";

  while (i >= 0 || j >= 0 || carry > 0) {
    const first = i < 0 ? 0 : num1.charAt(i) - "0";
    const second = j < 0 ? 0 : num2.charAt(j) - "0";

    const currSum = first + second + carry;

    if (currSum >= 10) {
      sum = (currSum % 10) + sum;
      carry = 1;
    } else {
      sum = currSum + sum;
      carry = 0;
    }

    i--;
    j--;
  }

  return sum;
};
