const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const lines = [];
rl.on("line", (line) => {
  lines.push(line);
}).on("close", () => {
  const [students, variants, row, place] = lines;
  const result = fourthTask(students, variants, row, place);

  rl.output.write(result);
});

/**
 *
 * @param {string} students  количество учеников в классе 2 ≤ N ≤ 109
 * @param {string} variants количество подготовленных для контрольной вариантов заданий 2 ≤ K ≤ N.
 * @param {string} row номер ряда, на который уже сел Петя
 * @param {string} place цифра 1, если он сел на правое место, и 2, если на левое

 * @returns {string} Если Вася никак не сможет писать тот же вариант, что и Петя, то выведите  - 1. Если решение существует, то выведите два числа — номер ряда, на который следует сесть Васе, и 1, если ему надо сесть на правое место, или 2, если на левое.
 */

const fourthTask = (students, variants, row, place) => {
  students = Number(students);
  variants = Number(variants);
  row = Number(row);
  place = Number(place);
  const petyaPlace = (row - 1) * 2 + place;

  const i = rbinsearch(1, petyaPlace, check, [petyaPlace, variants]);

  const variant = petyaPlace - variants * i;

  if (students - variants * (i + 1) > 0) {
    const first = variant + variants * (i + 1);
    const second = variant + variants * (i - 1);

    const firstRow = Math.ceil(first / 2);
    const secondRow = Math.ceil(second / 2);

    const vasyaPlace =
      Math.abs(firstRow - row) > Math.abs(secondRow - row) && second > 0
        ? second
        : first;
    const vasyaRow = Math.ceil(vasyaPlace / 2);
    const rowPlace = vasyaPlace % 2 === 0 ? 2 : 1;

    return `${vasyaRow} ${rowPlace}`;
  } else {
    return "-1";
  }
};

const check = (index, params) => {
  const [place, variants] = params;
  return place - variants * index <= variants;
};

const rbinsearch = (l, r, check, checkparams) => {
  while (l < r) {
    const m = Math.floor((l + r) / 2);
    if (check(m, checkparams)) {
      r = m;
    } else {
      l = m + 1;
    }
  }
  return l;
};
