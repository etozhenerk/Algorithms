const fs = require("fs");
let [n, ...matrix] = fs.readFileSync("input.txt", "utf8").split("\n");

/**
 *
 * @param {string} n В первой строке дано одно число n — количество вершин в графе ( 1 ≤ n ≤ 500 ).
 * @param {string[]} matrix Далее в n строках задан сам граф матрицей смежности.
 * @returns {void} Если в иcходном графе нет цикла, то выведите «NO». Иначе, в первой строке выведите «YES», во второй строке выведите число k — количество вершин в цикле, а в третьей строке выведите k различных чисел — номера вершин, которые принадлежат циклу в порядке обхода (обход можно начинать с любой вершины цикла). Если циклов несколько, то выведите любой.
 */

const findCycle = (n, matrix) => {
  n = parseInt(n);
  matrix = matrix
    .filter((row) => row !== "")
    .map((row) => row.split(" ").map((i) => parseInt(i)));

  console.log(matrix);
};

findCycle(n, matrix);
