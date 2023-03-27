const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let lines = [];
rl.on("line", (line) => {
  lines.push(line);
}).on("close", () => {
  const [n, ...coordinates] = lines;
  taskB(coordinates);
});

/**
 *
 * @param {string[]} coordinates Каждая из N последующих строк содержит описание четырех точек - четыре пары целых чисел X и Y (−100 ≤ X ≤ 100, −100 ≤ Y ≤ 100), обозначающих координаты точки. Гарантируется, что четыре точки, о которых идет речь в одном вопросе, не лежат на одной прямой.
 * @returns {void} Для каждого из вопросов выведите "YES", если четыре заданные точки могут образовать параллелограмм, и "NO" в противном случае. Ответ на каждый из запросов должен быть в отдельной строке без кавычек.
 */

const taskB = (coordinates) => {
  coordinates = coordinates
    .filter((item) => item !== "")
    .map((item) =>
      item
        .split(" ")

        .map((i) => parseInt(i))
    );

  for (let i = 0; i < coordinates.length; i++) {
    const element = coordinates[i];

    if (
      isParallelogram(
        element[2],
        element[3],
        element[0],
        element[1],
        element[4],
        element[5],
        element[6],
        element[7]
      )
    ) {
      rl.output.write("YES\n");
    } else if (
      isParallelogram(
        element[2],
        element[3],
        element[0],
        element[1],
        element[6],
        element[7],
        element[4],
        element[5]
      )
    ) {
      rl.output.write("YES\n");
    } else if (
      isParallelogram(
        element[2],
        element[3],
        element[4],
        element[5],
        element[0],
        element[1],
        element[6],
        element[7]
      )
    ) {
      rl.output.write("YES\n");
    } else if (
      isParallelogram(
        element[2],
        element[3],
        element[4],
        element[5],
        element[6],
        element[7],
        element[0],
        element[1]
      )
    ) {
      rl.output.write("YES\n");
    } else if (
      isParallelogram(
        element[2],
        element[3],
        element[6],
        element[7],
        element[4],
        element[5],
        element[0],
        element[1]
      )
    ) {
      rl.output.write("YES\n");
    } else if (
      isParallelogram(
        element[2],
        element[3],
        element[6],
        element[7],
        element[0],
        element[1],
        element[4],
        element[5]
      )
    ) {
      rl.output.write("YES\n");
    } else {
      rl.output.write("NO\n");
    }
  }
};

const isParallelogram = (x1, y1, x2, y2, x3, y3, x4, y4) => {
  const l1 = (x1 - x2) ** 2 + (y1 - y2) ** 2;
  const l2 = (x3 - x4) ** 2 + (y3 - y4) ** 2;

  if (y1 - y2 === 0 && y3 - y4 === 0 && l1 === l2) {
    return true;
  }

  if (y1 - y2 === 0 || y3 - y4 === 0) {
    return false;
  }

  const k1 = (x1 - x2) / (y1 - y2);
  const k2 = (x3 - x4) / (y3 - y4);

  if (l1 === l2 && k1 === k2) {
    return true;
  }

  return false;
};
