/**
 * @param {number[]} nums
 * @return {number}
 */
const slowMissingNumber = (nums) => {
  let numbers = Array.from(Array(nums.length + 1).keys());

  nums.forEach((num) => {
    numbers = numbers.filter((number) => number !== num);
  });

  return numbers[0];
};

const fastMissingNumber = (nums) => {
    let len = nums.length;
    let sum = nums.reduce((p, n) => p + n);
    let actualSum = (len * (len + 1)) / 2;
    return actualSum - sum;
  };
  