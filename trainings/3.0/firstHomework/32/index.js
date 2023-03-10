const fs = require("fs");
let [nm, ...ribs] = fs.readFileSync("input.txt", "utf8").split("\n");

/**
 *
 * @param {string} nm В первой строке записаны два целых числа N (1 ≤ N ≤ 103) и M (0 ≤ M ≤ 5 * 105) — количество вершин и ребер в графе.
 * @param {string[]} ribs В последующих M строках перечислены ребра — пары чисел, определяющие номера вершин, которые соединяют ребра.
 * @returns {void}В первой строчке выходного файла выведите количество компонент связности. Далее выведите сами компоненты связности в следующем формате: в первой строке количество вершин в компоненте, во второй - сами вершины в произвольном порядке.
 */

const connectivityComponents = (nm, ribs) => {
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
      idfs(graph, visited, key, cmp);
      cmp++;
    }
  }

  const components = [];

  for (const key in visited) {
    const element = visited[key];

    if (components[element]) {
      components[element].push(key);
    } else {
      components[element] = [key];
    }
  }

  let result = (components.length - 1).toString() + "\n";

  for (let i = 1; i < components.length; i++) {
    result += components[i].length.toString() + "\n";
    result += components[i].join(" ") + "\n";
  }

  fs.writeFileSync("output.txt", result);
};

const dfs = (graph, visited, now, cmp) => {
  visited[now] = cmp;

  for (let index = 0; index < graph[now].length; index++) {
    if (!visited[graph[now][index]]) {
      dfs(graph, visited, graph[now][index], cmp);
    }
  }
};

const idfs = (graph, visited, now, cmp) => {
  const stack = [...graph[now]];

  while (stack.length > 0) {
    const curr = stack.pop();

    if (!visited[curr]) {
      visited[curr] = cmp;
      for (let index = 0; index < graph[curr].length; index++) {
        if (!visited[graph[curr][index]]) {
          stack.push(graph[curr][index]);
        }
      }
    }
  }
};

connectivityComponents(nm, ribs);
