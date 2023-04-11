const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const lines = [];
rl.on("line", (line) => {
  lines.push(line);
}).on("close", () => {
  const [nm, ...ribs] = lines;
  depthFirstSearch(nm, ribs);
});

/**
 *
 * @param {string} nm В первой строке записаны два целых числа N (1 ≤ N ≤ 103) и M (0 ≤ M ≤ 5 * 105) — количество вершин и ребер в графе.
 * @param {string[]} ribs В последующих M строках перечислены ребра — пары чисел, определяющие номера вершин, которые соединяют ребра.
 * @returns {void} В первую строку выходного файла выведите число K — количество вершин в компоненте связности. Во вторую строку выведите K целых чисел — вершины компоненты связности, перечисленные в порядке возрастания номеров.
 */

const depthFirstSearch = (nm, ribs) => {
  [n, m] = nm.split(" ").map((i) => parseInt(i));
  ribs = ribs
    .filter((item) => item.trim() !== "")
    .map((item) => item.split(" ").map((i) => parseInt(i)));

  const graph = {};
  const visited = {};

  for (let i = 1; i <= n; i++) {
    graph[i] = [i];
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

  let cmp = 1;

  for (const key in graph) {
    if (!visited[key]) {
      dfs(graph, visited, key, cmp);
      cmp++;
    }
  }

  let length = 0;
  let komp = [];

  for (const key in visited) {
    const element = visited[key];

    if (element === visited[1]) {
      length++;
      komp.push(key);
    }
  }

  rl.output.write(length.toString() + "\n");
  rl.output.write(komp.join(" "));
};

const dfs = (graph, visited, now, cmp) => {
  visited[now] = cmp;

  graph[now].forEach((item) => {
    if (!visited[item]) {
      dfs(graph, visited, item, cmp);
    }
  });
};
