/**
 * @param {number[]} nums
 * @return {boolean}
 */
const containsDuplicate = (nums) => {
  const set = new Set();

  nums.forEach((num) => set.add(num));

  return nums.length !== set.size;
};

console.log(containsDuplicate([1, 2, 3, 4]));
