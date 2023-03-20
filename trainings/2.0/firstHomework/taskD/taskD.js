const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let lines = [];
rl.on("line", (line) => {
    lines.push(line);
}).on("close", () => {
    const [n, dist] = lines;
    const result = taskD(parseInt(n), dist);

    rl.output.write(result.toString());
});

/**
 *
 * @param {number} n количество учеников (0 < N < 100001).
 * @param {string} dist в строго возрастающем порядке координаты домов учеников — целые числа, не превосходящие 2 × 109 по модулю.
 * @returns {number} целое число — координату точки, в которой лучше всего построить школу.
 */

const taskD = (n, dist) => {
    const distNum = dist.split(" ").map(Number);

    const middle = Math.floor(n / 2);
    return distNum[middle];
};
