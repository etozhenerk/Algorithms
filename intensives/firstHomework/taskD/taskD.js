const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const lines = [];
rl.on("line", (line) => {
    lines.push(line);
}).on("close", () => {
    const [traincnt, times] = lines;
    const result = taskD(parseInt(traincnt), times);

    rl.output.write(result);
});

/**
 *
 * @param {number} traincnt Число n (1 ≤ n ≤ 2 × 104) — количество электричек.
 * @param {string} times n моментов времени в формате HH:MM (0 ≤ HH ≤ 23, 0 ≤ MM ≤ 59) через пробел.
 * @returns {string} Число — минимальное время в минутах между прибытием двух электричек.
 */

const taskD = (traincnt, times) => {
    const minutes = times
        .trim()
        .split(" ")
        .map((item) => {
            let [houres, minutes] = item.split(":");

            return parseInt(houres) * 60 + parseInt(minutes);
        })
        .sort((a, b) => a - b);

    let ans = 1440 + minutes[0] - minutes[minutes.length - 1];

    for (let i = 1; i < minutes.length; i++) {
        if (minutes[i] - minutes[i - 1] < ans) {
            ans = minutes[i] - minutes[i - 1];
        }
    }

    return ans.toString();
};
