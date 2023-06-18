/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const search = function (nums, target) {
  let l = 0;
  let r = nums.length - 1;
  while (l < r) {
    const m = Math.floor((l + r + 1) / 2);
    if (nums[m] <= target) {
      l = m;
    } else {
      r = m - 1;
    }
  }

  return nums[l] === target ? l : -1;
};
