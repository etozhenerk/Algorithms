/**
 * @param {number[]} nums
 * @return {number[]}
 */
const findErrorNums = (nums) => {
  const list = new Array(nums.length + 1);
  let repeat = 0;
  let lost = 0;

  for (let i = 0; i < nums.length; i++) {
    const element = nums[i];
    if (!list[element]) {
      list[element] = 0;
    }

    list[element]++;
  }

  for (let i = 1; i < list.length; i++) {
    const element = list[i];
    if (element > 1) {
      repeat = i;
    }

    if (!element) {
      lost = i;
    }
  }

  return [repeat, lost];
};
