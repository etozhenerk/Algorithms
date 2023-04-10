const fs = require("fs");
let [n, coordinates] = fs.readFileSync("input.txt", "utf8").split("\n");
n = parseInt(n);
coordinates = coordinates
  .trim()
  .split(" ")
  .map((n) => parseInt(n));
/**
 *
 * @param {number} n количество гвоздиков.
 * @param {number[]} coordinates N чисел — координаты всех гвоздиков (неотрицательные целые числа, не превосходящие 10000).
 * @returns {void} Выведите единственное число — минимальную суммарную длину всех ниточек.

*/

const carnations = (n, coordinates) => {
  coordinates = [0, ...coordinates.sort((a, b) => a - b)];
  const dp = new Array(coordinates.length).fill(0);

  dp[2] = coordinates[2] - coordinates[1];
  if (coordinates.length > 3) dp[3] = coordinates[3] - coordinates[1];

  for (let i = 4; i < coordinates.length; i++) {
    dp[i] =
      Math.min(dp[i - 1], dp[i - 2]) + coordinates[i] - coordinates[i - 1];
  }

  fs.writeFileSync("output.txt", dp[dp.length - 1].toString());
};

carnations(n, coordinates);
