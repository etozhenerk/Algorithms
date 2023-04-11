const fs = require("fs");
let [nm, ...ribs] = fs.readFileSync("input.txt", "utf8").split("\n");

/**
 *
 * @param {string} nm В первой строке записаны два целых числа N (1 ≤ N ≤ 103) и M (0 ≤ M ≤ 5 * 105) — количество вершин и ребер в графе.
 * @param {string[]} ribs В последующих M строках перечислены ребра — пары чисел, определяющие номера вершин, которые соединяют ребра.
 * @returns {void} Выведите любую топологическую сортировку графа в виде последовательности номеров вершин (перестановка чисел от 1 до N). Если топологическую сортировку графа построить невозможно, выведите -1.
 */

const connectivityComponents = (nm, ribs) => {
  [n, m] = nm.split(" ").map((i) => parseInt(i));
  ribs = ribs
    .filter((item) => item.trim() !== "")
    .map((item) => item.split(" ").map((i) => parseInt(i)));

  const graph = {};
  const visited = {};
  const colors = {};
  let error = 0;

  const dfs = (now, color) => {
    visited[now] = true;
    colors[now] = color;
    for (let index = 0; index < graph[now].length; index++) {
      if (!visited[graph[now][index]]) {
        dfs(graph[now][index], 3 - color);
        ans.push(graph[now][index]);
      } else if (colors[graph[now][index]] === colors[now]) {
        error = 1;
      }
    }
  };

  for (let i = 1; i <= n; i++) {
    graph[i] = [];
  }

  ribs.forEach((rib) => {
    [a, b] = rib;
    if (graph[a] && !graph[a].includes(b)) {
      graph[a].push(b);
    }
  });

  let ans = [];

  for (const key in graph) {
    if (!visited[key]) {
      visited[key] = true;
      dfs(parseInt(key), 1);
      ans.push(parseInt(key));
    }
  }

  if (error) {
    fs.writeFileSync("output.txt", "-1");
  } else {
    fs.writeFileSync("output.txt", ans.reverse().join(" "));
  }
};

connectivityComponents(nm, ribs);
