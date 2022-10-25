const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const lines = [];
rl.on("line", (line) => {
    lines.push(line);
}).on("close", () => {
    const [n, nums, m, ...requests] = lines;
    const result = taskC(nums, requests);

    rl.output.write(result);
});

/**
 *
 * @param {string} nums последовательность из n целых чисел, все числа по модулю не превосходят 100000. Нумерация в последовательности начинается с единицы.
 * @param {string[]} requests запросы — два индекса l и r (1 ≤ l ≤ r ≤ n)
 * @returns {string} количество положительных на отрезке  .
 */

const taskC = (nums, requests) => {
    nums = nums.split(" ").map(Number);
    const ans = [];

    const prefixPositive = [0];

    for (let i = 1; i < nums.length + 1; i++) {
        const element = nums[i - 1];
        if (element > 0) {
            prefixPositive.push(prefixPositive[i - 1] + 1);
        } else {
            prefixPositive.push(prefixPositive[i - 1]);
        }
    }

    for (let i = 0; i < requests.length; i++) {
        const [l, r] = requests[i].split(" ");

        const positive = prefixPositive[parseInt(r)] - prefixPositive[parseInt(l) - 1];

        ans.push(positive);
    }

    return ans.join("\n");
};
