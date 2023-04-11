const fs = require("fs");
let [nm, ...ribs] = fs.readFileSync("input.txt", "utf8").split("\n");

/**
 *
 * @param {string} nm В первой строке находятся два числа N и M — количество студентов и количество пар студентов, обменивающихся записками (1 ≤ N ≤ 102, 0 ≤ M ≤ N(N−1)/2).
 * @param {string[]} ribs Далее в M строках расположены описания пар студентов: два числа, соответствующие номерам студентов, обменивающихся записками (нумерация студентов идёт с 1). Каждая пара студентов перечислена не более одного раза.
 * @returns {void} Необходимо вывести ответ на задачу профессора Флойда. Если возможно разделить студентов на две группы - выведите YES; иначе выведите NO.
 */

const bipartiteGraph = (nm, ribs) => {
  [n, m] = nm.split(" ").map((i) => parseInt(i));
  ribs = ribs
    .filter((item) => item.trim() !== "")
    .map((item) => item.split(" ").map((i) => parseInt(i)));

  const graph = [];
  const visited = [];
  const color = [];

  let isBipartiteGraph = true;

  for (let i = 1; i <= n; i++) {
    graph[i] = [];
  }

  ribs.forEach((rib) => {
    [a, b] = rib;
    if (graph[a] && !graph[a].includes(b)) {
      graph[a].push(b);
    }

    if (graph[b] && !graph[b].includes(a)) {
      graph[b].push(a);
    }
  });

  for (let i = 1; i < graph.length; i++) {
    if (!visited[i]) {
      visited[i] = true;
      color[i] = 1;
      isBipartiteGraph = isBipartite(graph, i, visited, color);

      if (!isBipartiteGraph) {
        fs.writeFileSync("output.txt", "NO");
        return;
      }
    }
  }

  fs.writeFileSync("output.txt", "YES");
};

const isBipartite = (graph, now, visited, color) => {
  for (let i = 0; i < graph[now].length; i++) {
    const u = graph[now][i];

    if (!visited[u]) {
      visited[u] = true;
      color[u] = 3 - color[now];
      if (!isBipartite(graph, u, visited, color)) {
        return false;
      }
    } else if (color[u] === color[now]) {
      return false;
    }
  }
  return true;
};

bipartiteGraph(nm, ribs);
