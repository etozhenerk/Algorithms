/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const searchInsert = (nums, target) => {
    let position = nums.length;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > target) {
            position = i;
            break;
        }

        if (nums[i] === target) {
            position = i;
            break;
        }
    }

    return position;
};
