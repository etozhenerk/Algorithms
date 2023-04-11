const fs = require("fs");
let [n, ...numbers] = fs.readFileSync("input.txt", "utf8").split("\n");
numbers = numbers
  .filter((item) => item !== "")
  .map((item) => item.split(" ").map((i) => BigInt(i)));
/**
 *
 * @param {number} n число n (0 ≤ n ≤ 2*105).
 * @param {[BigInt, BigInt][]} numbers В следующих n строках заданы по два числа: цвет числа в ящике di и значение числа ai (-1018 ≤ di, ai ≤ 1018
 * @returns {void} Выведите в порядке возрастания номера цвета пары чисел, каждая в новой строке: номер цвета и сумму всех чисел данного цвета.
 */

const taskA = (n, numbers) => {
  const colors = new Map();
  let ans = "";

  for (let i = 0; i < numbers.length; i++) {
    const [color, value] = numbers[i];

    colors.set(color, BigInt(colors.get(color) || 0) + value);
  }

  const colorsKeys = [...colors.keys()].sort((a, b) =>
    a < b ? -1 : a > b ? 1 : 0
  );

  ans += colorsKeys.reduce(
    (prev, curr) => prev + `${curr} ${colors.get(curr)}\n`,
    ""
  );

  fs.writeFileSync("output.txt", ans);
};

taskA(parseInt(n), numbers);
