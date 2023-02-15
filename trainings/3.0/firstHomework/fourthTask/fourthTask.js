const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const lines = [];
rl.on("line", (line) => {
  lines.push(line);
}).on("close", () => {
  const [students, variants, rowP, placeP] = lines;
  fourthTask(students, variants, rowP, placeP);
});

/**
 *
 * @param {string} students  количество учеников в классе 2 ≤ N ≤ 109
 * @param {string} variants количество подготовленных для контрольной вариантов заданий 2 ≤ K ≤ N.
 * @param {string} rowP номер ряда, на который уже сел Петя
 * @param {string} placeP цифра 1, если он сел на правое место, и 2, если на левое

 * @returns {string} Если Вася никак не сможет писать тот же вариант, что и Петя, то выведите  - 1. Если решение существует, то выведите два числа — номер ряда, на который следует сесть Васе, и 1, если ему надо сесть на правое место, или 2, если на левое.
 */

const fourthTask = (students, variants, rowP, placeP) => {
  students = parseInt(students);
  variants = parseInt(variants);
  rowP = parseInt(rowP);
  placeP = parseInt(placeP);

  let pos1 = (rowP - 1) * 2 + placeP - variants;
  let pos2 = (rowP - 1) * 2 + placeP + variants;

  let row1 = Math.floor((pos1 + 1) / 2);
  let row2 = Math.floor((pos2 + 1) / 2);

  if (
    pos1 > 0 &&
    (pos2 > students || Math.abs(rowP - row1) < Math.abs(rowP - row2))
  ) {
    rl.output.write(`${row1} ${2 - (pos1 % 2)}`);
  } else if (pos2 <= students) {
    rl.output.write(`${row2} ${2 - (pos2 % 2)}`);
  } else {
    rl.output.write("-1");
  }
};
