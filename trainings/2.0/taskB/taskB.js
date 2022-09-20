// const readline = require("readline");

// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout,
// });

// let lines = [];
// rl.on("line", (line) => {
//     lines.push(line);
// }).on("close", () => {
//     const [string] = lines;
//     const result = taskB(string.split(" "));

//     rl.output.write(result.toString());
// });

/**
 *
 * @param {number} numbers три числа: сначала N – общее количество станций кольцевой линии, а затем i и j – номера станции, на которой Витя садится, и станции, на которой он должен выйти.
 * @returns {number} минимальное количество промежуточных станций (не считая станции посадки и высадки)
 */

let taskB = (numbers) => {
    [n, i, j] = numbers;

    const dist1 = Math.abs(j - i) - 1;
    const dist2 = n - dist1 - 2;
    const ans = Math.min(dist1, dist2);

    return ans;
};

console.log(taskB(["99", "98", "2"]));
