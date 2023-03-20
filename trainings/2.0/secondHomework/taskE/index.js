const fs = require("fs");
let [n, array] = fs.readFileSync("input.txt", "utf8").split("\n");
n = parseInt(n);
array = array.split(" ").map((i) => parseInt(i));

/**
 *
 * @param {number} n количество папок
 * @param {number[]} array  количество дипломов в каждой из папок.
 * @returns {void} Выведите одно число - минимальное количество секунд, необходимое Ивану в худшем случае для определения того, в какой папке содержится диплом.
 */

const findMax = (n, array) => {
  let max = array[0];
  let ans = 0;

  for (let i = 0; i < array.length; i++) {
    if (array[i] > max) {
      max = array[i];
    }
    ans += array[i];
  }

  ans = ans - max;

  fs.writeFileSync("output.txt", ans.toString());
};

findMax(n, array);
