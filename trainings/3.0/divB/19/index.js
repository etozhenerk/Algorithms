const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const lines = [];
rl.on("line", (line) => {
  lines.push(line);
}).on("close", () => {
  const [n, ...commands] = lines;
  heapFunction(commands);
});

/**
 *
 * @param {string[]} commands Команда может иметь формат: “0 <число>” или “1”, обозначающий, соответственно, операции Insert(<число>) и Extract. Гарантируется, что при выполенении команды Extract в структуре находится по крайней мере один элемент.
 * @returns {void} Для каждой команды извлечения необходимо отдельной строкой вывести число, полученное при выполнении команды Extract.
 */

const heapFunction = (commands) => {
  let heap = [];

  for (let index = 0; index < commands.length; index++) {
    const command = commands[index].trim().split(" ");

    if (command[0] === "0") {
      pushHeap(heap, parseInt(command[1]));
    } else {
      const ans = popHeap(heap);

      rl.output.write(`${ans}\n`);
    }
  }
};

/**
 *
 * @param {number[]} heap куча
 * @param {number} x число, которое нужно добавить кучу
 * @returns {void}
 */

const pushHeap = (heap, x) => {
  heap.push(x);

  let pos = heap.length - 1;

  while (pos > 0 && heap[pos] > heap[Math.floor((pos - 1) / 2)]) {
    const tmp = heap[pos];
    heap[pos] = heap[Math.floor((pos - 1) / 2)];
    heap[Math.floor((pos - 1) / 2)] = tmp;

    pos = Math.floor((pos - 1) / 2);
  }
};

/**
 *
 * @param {number[]} heap куча
 * @returns {number} возвращает удаленное число
 */

const popHeap = (heap) => {
  ans = heap[0];
  heap[0] = heap[heap.length - 1];
  let pos = 0;

  while (pos * 2 + 1 < heap.length - 1) {
    let minChildPos = pos * 2 + 1;
    if (heap[pos * 2 + 2] > heap[minChildPos]) {
      minChildPos = pos * 2 + 2;
    }

    if (heap[pos] < heap[minChildPos]) {
      const tmp = heap[pos];
      heap[pos] = heap[minChildPos];
      heap[minChildPos] = tmp;

      pos = minChildPos;
    } else {
      break;
    }
  }

  heap.pop();

  return ans;
};
