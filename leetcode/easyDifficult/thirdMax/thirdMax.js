/**
 * @param {number[]} nums
 * @return {number}
 */
const thirdMax = (nums) => {
  let max3 = Math.min(...nums);
  let max2 = Math.min(...nums);
  let max1 = Math.max(...nums);

  for (let i = 0; i < nums.length; i++) {
    const element = nums[i];

    if (element > max1) {
      max3 = max2;
      max2 = max1;
      max1 = element;
    } else if (element < max1 && element > max2) {
      max3 = max2;
      max2 = element;
    } else if (element < max2 && element > max3) {
      max3 = element;
    }
  }

  const ans = max2 === max3 ? max1 : max3;

  return ans;
};
