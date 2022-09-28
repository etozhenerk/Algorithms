/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
const intersection = (nums1, nums2) => {
  const set = new Set();

  nums1.forEach((num) => {
    if (nums2.includes(num)) {
      set.add(num);
    }
  });

  return Array.from(set);
};
