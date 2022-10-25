const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const lines = [];
rl.on("line", (line) => {
    lines.push(line);
}).on("close", () => {
    const [counts, coordinates] = lines;
    const result = taskD(counts, coordinates);

    rl.output.write(result);
});

/**
 *
 * @param {string} counts числа N (2 < N < 10001) – количество стойл и K (1 < K < N) – количество коров
 * @param {string} coordinates  N натуральных чисел в порядке возрастания – координаты стойл
 * @returns {string} количество положительных на отрезке  .
 */

const taskD = (counts, coordinates) => {
    const [n, k] = counts.trim().split(" ").map(Number);
    coordinates = coordinates.trim().split(" ").map(Number);

    const isGood = (m) => {
        let cnt = 1;
        let prev = coordinates[0];

        for (let i = 1; i < coordinates.length; i++) {
            if (coordinates[i] - prev >= m) {
                cnt++;
                prev = coordinates[i];
            }
        }
        return cnt >= k;
    };

    let l = 0;
    let r = coordinates[coordinates.length - 1];

    while (r > l) {
        const m = parseInt((l + r + 1) / 2);
        if (isGood(m)) {
            l = m;
        } else {
            r = m - 1;
        }
    }

    return l.toString();
};
