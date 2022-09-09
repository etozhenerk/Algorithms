const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let lines = [];
rl.on("line", (line) => {
    lines.push(line);
}).on("close", () => {
    const [input] = lines;
    const result = taskA(parseInt(input));

    rl.output.write(result.toString());
});

/**
 *
 * @param {number} input Число n (1 ≤ n ≤ 231 - 1)
 * @returns {number} Количество ступенек в лесенке
 */

let taskA = (input) => {
    let ans = 0;
    let length = 0;

    for (let index = 1; index <= input; index++) {
        length = length + index;
        if (length <= input) {
            ans++;
        } else {
            break;
        }
    }

    return ans;
};
