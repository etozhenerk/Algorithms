/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = (nums, target) => {
    const answer = [0, 1];
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                answer[0] = i;
                answer[1] = j;
            }
        }
    }
    return answer;
};

console.log(twoSum([3, 3], 6));
