const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let lines = [];
rl.on("line", (line) => {
    lines.push(line);
}).on("close", () => {
    const [string] = lines;
    const result = taskС(string.split(" "));

    rl.output.write(result.toString());
});

/**
 *
 * @param {number[]} numbers три числа: x, y и z (1≤x≤31, 1≤y≤31, 1970≤z≤2069. Гарантируется, что хотя бы в одном формате запись xyz задаёт корректную дату.
 * @returns {number} 1, если дата определяется однозначно, и 0 в противном случае
 */

const taskС = (numbers) => {
    [x, y, z] = numbers;

    if (x <= 12 && y <= 12 && y !== x) {
        return 0;
    }
    return 1;
};
