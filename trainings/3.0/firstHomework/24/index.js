const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const lines = [];
rl.on("line", (line) => {
  lines.push(line);
}).on("close", () => {
  const [n, ...data] = lines;
  tickets(data);
});

/**
 *
 * @param {string[]} data количество покупателей в очереди (1 ≤ N ≤ 5000). Далее идет N троек натуральных чисел Ai, Bi, Ci. Каждое из этих чисел не превышает 3600. Люди в очереди нумеруются, начиная от кассы.
 * @returns {void} Требуется вывести одно число — минимальное время в секундах, за которое могли быть обслужены все покупатели.
 */

const tickets = (data) => {
  const dp = new Array(data.length + 1).fill(0);
  const a = new Array(data.length + 1).fill(0);
  const b = new Array(data.length + 1).fill(0);
  const c = new Array(data.length + 1).fill(0);
  data = data.map((item, i) => {
    item = item.split(" ");
    a[i + 1] = parseInt(item[0]);
    b[i + 1] = parseInt(item[1]);
    c[i + 1] = parseInt(item[2]);
  });

  dp[0] = 0;
  dp[1] = a[1];
  if (data.length > 1) {
    dp[2] = Math.min(a[1] + a[2], b[1]);
  }

  for (let i = 3; i < data.length + 1; i++) {
    dp[i] = Math.min(
      dp[i - 1] + a[i],
      dp[i - 2] + b[i - 1],
      dp[i - 3] + c[i - 2]
    );
  }

  rl.output.write(dp[dp.length - 1].toString());
};
