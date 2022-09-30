/**
 * @param {number[]} nums
 * @return {number[]}
 */
const findDisappearedNumbersSlow = (nums) => {
  const ans = [];

  for (let i = 1; i <= nums.length; i++) {
    if (!nums.includes(i)) {
      ans.push(i);
    }
  }

  return ans;
};

const findDisappearedNumbersFast = (nums) => {
  const ans = [];
  const numbers = new Array(nums.length);
  for (let i = 0; i < nums.length; i++) {
    numbers[nums[i] - 1] = nums[i];
  }

  for (let i = 0; i < numbers.length; i++) {
    if (!numbers[i]) {
      ans.push(i + 1);
    }
  }

  return ans;
};

const findDisappearedNumbersSet = (nums) => {
  const set = new Set(nums);
  const ans = [];

  for (let i = 0; i < nums.length; i += 1) {
    if (!set.has(i + 1)) {
      ans.push(i + 1);
    }
  }

  return ans;
};
