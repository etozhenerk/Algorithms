const fs = require("fs");
let [n, ...places] = fs.readFileSync("input.txt", "utf8").trim().split("\n");

places = places.map((item) =>
  item
    .replace("\r", "")
    .split(" ")
    .map((i) => parseInt(i))
);
/**
 *
 * @param {number} n
 * @param {number[][]} places
 * @returns {void} 

*/

const findTurtles = (n, places) => {
  const set = new Set();

  places.forEach((item) => {
    const [a, b] = item;
    if (a >= 0 && b >= 0 && a + b === n - 1) {
      set.add(a);
    }
  });

  fs.writeFileSync("output.txt", set.size.toString());
};

findTurtles(n, places);
