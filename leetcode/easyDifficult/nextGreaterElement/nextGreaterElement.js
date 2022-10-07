/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
const nextGreaterElement = (nums1, nums2) => {
  const map = new Map();

  const stack = [];

  nums2.forEach((num) => {
    while (stack.length && stack[stack.length - 1] < num) {
      map.set(stack.pop(), num);
    }
    stack.push(num);
  });

  const ans = nums1.map((num) => (map.has(num) ? map.get(num) : -1));

  return ans;
};
