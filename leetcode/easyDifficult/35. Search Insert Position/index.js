/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const searchInsert = function (nums, target) {
  let l = 0;
  let r = nums.length;
  while (l < r) {
    const m = Math.floor((l + r) / 2);

    if (nums[m] > target) {
      r = m;
    } else {
      l = m + 1;
    }
  }

  return l;
};
