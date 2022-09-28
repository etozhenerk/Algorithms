/**
 * @param {number[]} nums
 * @return {string[]}
 */
const summaryRanges = (nums) => {
  const minMax = [];
  let start = nums[0];
  let end = nums[nums.length - 1];

  for (let i = 0; i < nums.length; i++) {
    const element = nums[i];
    const nextElement = nums[i + 1];

    if (nextElement !== element + 1) {
      end = element;

      minMax.push([start, end]);

      start = nextElement;
    }
  }

  const ans = minMax.map((item) =>
    item[0] !== item[1] ? `${item[0]}->${item[1]}` : `${item[0]}`
  );

  return ans;
};
