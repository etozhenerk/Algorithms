/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const moveZeroes = (nums) => {
  let index = 0;
  const length = nums.length;

  for (let i = 0; i < length; i++) {
    if (nums[i] !== 0) {
      nums[index] = nums[i];
      index++;
    }
  }

  for (let i = index; i < length; i++) {
    nums[i] = 0;
  }

  return nums;
};
