/**
 * @param {number[]} nums
 * @return {number}
 */
const findLengthOfLCIS = (nums) => {
  let start = 0;
  let ans = [];

  for (let i = 0; i < nums.length; i++) {
    if (nums[i + 1] <= nums[i]) {
      ans.push(i + 1 - start);
      start = i + 1;
    }
  }

  ans.push(nums.length - start);

  return Math.max(...ans);
};
