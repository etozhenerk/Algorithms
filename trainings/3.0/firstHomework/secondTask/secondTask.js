const { off } = require("process");
const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const lines = [];
rl.on("line", (line) => {
    lines.push(line);
}).on("close", () => {
    const [k, s] = lines;
    const result = secondTask(k, s);

    rl.output.write(result.toString());
});

/**
 *
 * @param {number} k целое число k (0 ≤ k ≤ 109)
 * @param {string} s непустая строчка S (|S| ≤ 2 ⋅ 105). Строчка S состоит только из маленьких латинских букв.

 * @returns {number} максимально возможную красоту строчки, которую можно получить
 */

const secondTask = (k, s) => {
    const letters = {};

    let max = 1;
};
