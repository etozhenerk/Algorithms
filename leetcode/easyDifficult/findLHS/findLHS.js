/**
 * @param {number[]} nums
 * @return {number}
 */
const findLHS = (nums) => {
  let ans = 0;
  let list = {};

  for (let i = 0; i < nums.length; i++) {
    const element = nums[i];
    if (!list[element]) {
      list[element] = 0;
    }

    list[element]++;
  }

  for (const key in list) {
    if (list[key - 1]) {
      if (list[key] + list[key - 1] > ans) {
        ans = list[key] + list[key - 1];
      }
    }
  }

  return ans;
};

console.log(findLHS([1, 2, 2, 1]));
