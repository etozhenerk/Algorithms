/**
 * @param {number[]} nums
 * @return {number}
 */
const findMaxConsecutiveOnes = (nums) => {
  let count = 0;
  let max = 0;

  for (let i = 0; i < nums.length; i++) {
    const element = nums[i];
    count += element;
    max = Math.max(max, count);
    if (!element) {
      count = 0;
    }
  }
  return max;
};
