const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let lines = [];
rl.on("line", (line) => {
    lines.push(line);
}).on("close", () => {
    const [r, i, c] = lines;
    const result = taskA(parseInt(r), parseInt(i), parseInt(c));

    rl.output.write(result.toString());
});

/**
 *
 * @param {number[]} r (−128 ≤ r ≤ 127) — код завершения задачи, во второй — целое число
 * @param {number} i (0 ≤ i ≤ 7) — вердикт интерактора, в третьей — целое число
 * @param {number} c (0 ≤ c ≤ 7) — вердикт чекера.
 * @returns {number} число от 0 до 7 включительно — итоговый вердикт системы
 */

let taskA = (r, i, c) => {
    if (i === 0) {
        if (r !== 0) {
            return 3;
        } else {
            return c;
        }
    } else if (i === 1) {
        return c;
    } else if (i === 4 && r !== 0) {
        if (r !== 0) {
            return 3;
        } else {
            return 4;
        }
    } else if (i === 6) {
        return 0;
    } else if (i === 7) {
        return 1;
    } else {
        return i;
    }
};
