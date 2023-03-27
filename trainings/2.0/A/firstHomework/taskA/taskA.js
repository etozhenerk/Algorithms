const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let lines = [];
rl.on("line", (line) => {
  lines.push(line);
}).on("close", () => {
  const [a, b, c, d] = lines;
  const result = taskA(parseInt(a), parseInt(b), parseInt(c), parseInt(d));

  rl.output.write(result);
});

/**
 *
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @param {number} d
 * @returns {string} Необходимо вывести все целочисленные решения, если их число конечно, “NO” (без кавычек), если целочисленных решений нет, и “INF” (без кавычек), если их бесконечно много.
 */

const taskA = (a, b, c, d) => {
  if (a === 0 && b === 0) {
    return "INF";
  } else if (a === 0 || b * c === a * d) {
    return "NO";
  } else if (b % a === 0) {
    const result = Math.floor(-b / a);
    return result.toString();
  } else {
    return "NO";
  }
};
