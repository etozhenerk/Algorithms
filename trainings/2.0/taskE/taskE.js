const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let lines = [];
rl.on("line", (line) => {
    lines.push(line);
}).on("close", () => {
    const [n, coordinates] = lines;
    const result = taskE(parseInt(n), coordinates);

    rl.output.write(result.toString());
});

/**
 *
 * @param {number} d  натуральное число d (не превосходящее 1000).
 * @param {string} coordinates координаты точки X – два целых числа из диапазона от ­–1000 до 1000.
 * @returns {number}
 */

const taskE = (d, coordinates) => {
    const [x, y] = coordinates.split(" ").map(Number);

    if (x >= 0 && y >= 0 && x + y <= d) {
        return 0;
    } else {
        const dist1 = x ** 2 + y ** 2;
        const dist2 = (x - d) ** 2 + y ** 2;
        const dist3 = x ** 2 + (y - d) ** 2;

        const min = Math.min(dist1, dist2, dist3);

        if (dist1 === min) {
            return 1;
        }

        if (dist2 === min) {
            return 2;
        }

        if (dist3 === min) {
            return 3;
        }
    }
};
