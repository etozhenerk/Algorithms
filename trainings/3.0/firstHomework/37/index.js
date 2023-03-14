const fs = require("fs");
let [n, ...matrix] = fs.readFileSync("input.txt", "utf8").split("\n");

/**
 *
 * @param {string} n В первой строке дано одно число n — количество вершин в графе ( 1 ≤ n ≤ 500 ).
 * @param {string[]} matrix Далее в n строках задан сам граф матрицей смежности.
 * @returns {void} Выведите сначала L – длину кратчайшего пути (количество ребер, которые нужно пройти), а потом сам путь. Если путь имеет длину 0, то его выводить не нужно, достаточно вывести длину. Необходимо вывести путь (номера всех вершин в правильном порядке). Если пути нет, нужно вывести -1.
 */

const path = (n, matrix) => {
  n = parseInt(n);
  matrix = matrix
    .filter((row) => row !== "")
    .map((row) => row.split(" ").map((i) => parseInt(i)));
  const [s, f] = matrix.pop();

  const dist = new Array(n + 1).fill(-1);
  dist[s] = 0;
  bfs(s, n, matrix, dist);
  console.log(dist[f]);
  fs.writeFileSync("output.txt", dist[f].toString());
};

const bfs = (start, n, matrix, dist) => {
  const queue = [start];

  while (queue.length > 0) {
    const v = queue.shift();

    for (let i = 1; i < n + 1; i++) {
      if (matrix[v - 1][i - 1]) {
        if (dist[i] == -1) {
          queue.push(i);
          dist[i] = dist[v] + 1;
        } else {
          dist[i] = Math.min(dist[i], dist[v] + 1);
        }
      }
    }
  }
};

path(n, matrix);
