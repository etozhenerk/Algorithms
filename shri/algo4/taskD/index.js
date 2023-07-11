const fs = require("fs");

/**
 *
 * @param {string[]} str
 * @returns {number[][]}
 */

const numbersHandler = (str) =>
  str
    .filter((item) => !!item)
    .map((item) => item.split(" ").map((i) => parseInt(i)));

let [v, ...numbers] = fs.readFileSync("input.txt", "utf8").split("\n");

v = parseInt(v);

const numbersArr = numbersHandler(numbers);

/**
 *
 * @param {number} v количество вершин
 * @param {number[][]} numbers размеры поддеревьев для каждой из вершин
 * @returns {string} ответ на задачу.
 */

const getSizes = (v, numbers) => {
  const neighbors = [];
  const subtreeSize = new Array(v + 1).fill(-1);
  for (let i = 0; i < v + 1; i++) {
    neighbors.push([]);
  }

  for (let i = 0; i < numbers.length; i++) {
    const [a, b] = numbers[i];

    neighbors[a].push(b);
    neighbors[b].push(a);
  }
  dfs(1, neighbors, subtreeSize);

  const ans = subtreeSize.slice(1).join(" ");

  return ans;
};

/**
 *
 * @param {number} index
 * @param {number[][]} neighbors
 * @param {number[]} subtreeSize
 * @returns {number}
 */

const dfs = (index, neighbors, subtreeSize) => {
  subtreeSize[index] = 1;

  for (let i = 0; i < neighbors[index].length; i++) {
    const element = neighbors[index][i];

    if (subtreeSize[element] === -1) {
      subtreeSize[index] += dfs(element, neighbors, subtreeSize);
    }
  }

  return subtreeSize[index];
};

const ans = getSizes(v, numbersArr);

fs.writeFileSync("output.txt", ans);
