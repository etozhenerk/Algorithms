const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const lines = [];
rl.on("line", (line) => {
  lines.push(line);
}).on("close", () => {
  const [k, ...cells] = lines;
  const result = eighthTask(cells);

  rl.output.write(result);
});

/**
 *
 * @param {string[]} cells пары чисел Xi и Yi – координаты закрашенных клеток (|Xi|, |Yi| ≤ 109)
 * @returns {string} координаты левого нижнего и правого верхнего углов прямоугольника.
 */

const eighthTask = (cells) => {
  let minx = Number(cells[0][0]);
  let miny = Number(cells[0][2]);
  let maxx = Number(cells[0][0]);
  let maxy = Number(cells[0][2]);

  cells.forEach((cell) => {
    let [x, y] = cell.split(" ");
    x = Number(x);
    y = Number(y);

    minx = Math.min(minx, x);
    maxx = Math.max(maxx, x);
    miny = Math.min(miny, y);
    maxy = Math.max(maxy, y);
  });

  return `${minx} ${miny} ${maxx} ${maxy}`;
};
