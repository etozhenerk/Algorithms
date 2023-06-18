/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
const findDifference = function (nums1, nums2) {
  const set1 = new Set(nums1);
  const set2 = new Set(nums2);

  set1.forEach((item) => {
    if (set2.has(item)) {
      set1.delete(item);
      set2.delete(item);
    }
  });

  return [[...set1], [...set2]];
};
