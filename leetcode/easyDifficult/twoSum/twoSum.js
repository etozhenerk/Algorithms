/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSumSlow = (nums, target) => {
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

const twoSumFast = (nums, target) => {
    const answer = [0, 1];
    const list = {};
    for (let i = 0; i < nums.length; i++) {
        if (target - nums[i] in list) {
            answer[0] = list[target - nums[i]];
            answer[1] = i;
            return answer;
        }
        list[nums[i]] = i;
    }
    return answer;
};
