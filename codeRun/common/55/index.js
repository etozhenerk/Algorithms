const fs = require("fs");
let [n, ...coords] = fs.readFileSync("input.txt", "utf8").trim().split("\n");

coords = coords.map((item) => item.replace("\r", "").split(" "));
/**
 *
 * @param {string[][]} coords
 * @returns {void} 

*/

const findCount = (coords) => {
  const set = new Set();

  coords.forEach((item) => {
    const [x, _] = item;
    set.add(x);
  });

  fs.writeFileSync("output.txt", set.size.toString());
};

findCount(coords);
