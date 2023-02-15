const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const lines = [];
rl.on("line", (line) => {
  lines.push(line);
}).on("close", () => {
  const [n, ...nArrey] = lines;
  const result = fifthTask(nArrey);

  rl.output.write(result.toString());
});

/**
 

 * @param {string[]} nArrey  положительные числа ci — количество букв соответствующего типа (1 ≤ ci ≤ 109). Таким образом, первое число означает количество букв "a", второе число задаёт количество букв "b" и так далее.

 * @returns {number} максимально возможную хорошесть строки, которую можно собрать из имеющихся дощечек.
 */

const fifthTask = (nArrey) => {
  nArrey = nArrey.map((a) => parseInt(a));
  let count = 0;

  for (let index = 0; index < nArrey.length - 1; index++) {
    const element = nArrey[index];
    const next = nArrey[index + 1];
    count += Math.min(element, next);
  }

  return count;
};
