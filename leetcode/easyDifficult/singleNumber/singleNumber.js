/**
 * @param {number[]} nums
 * @return {number}
 */
const singleNumber = (nums) => {
    let counts = {};
    let max = nums.length;
    let ans = nums[0];

    for (let i = 0; i < nums.length; i++) {
        const element = nums[i];
        if (counts[element]) {
            counts[element]++;
        } else {
            counts[element] = 1;
        }
    }

    for (const iterator in counts) {
        if (counts[iterator] < max) {
            ans = iterator;
            max = counts[iterator];
        }
    }

    return ans;
};

console.log(singleNumber([1]));
