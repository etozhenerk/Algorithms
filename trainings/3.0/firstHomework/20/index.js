const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const lines = [];
rl.on("line", (line) => {
  lines.push(line);
}).on("close", () => {
  const [n, array] = lines;
  const result = sort(array);
  rl.output.write(result.join(" "));
});

/**
 *
 * @param {string} array N целых чисел, не превосходящих по абсолютной величине 109
 * @returns {void} Выведите эти числа в порядке неубывания.
 */

const sort = (array) => {
  array = array
    .trim()
    .split(" ")
    .map((i) => parseInt(i));

  if (array.length == 0) {
    return [];
  }

  let n = array.length;
  let i = Math.floor(n / 2);
  let j;
  let k;
  let t;
  while (true) {
    if (i > 0) {
      t = array[--i];
    } else {
      n--;
      if (n == 0) {
        return array;
      }
      t = array[n];
      array[n] = array[0];
    }
    j = i;
    k = j * 2 + 1;
    while (k < n) {
      if (k + 1 < n && array[k + 1] > array[k]) {
        k++;
      }
      if (array[k] > t) {
        array[j] = array[k];
        j = k;
        k = j * 2 + 1;
      } else {
        break;
      }
    }
    array[j] = t;
  }
};
