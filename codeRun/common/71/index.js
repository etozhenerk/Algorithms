const fs = require("fs");
let numbers = fs.readFileSync("input.txt", "utf8").trim().split("\n");
numbers = numbers.map((n) => parseInt(n));
numbers.pop();
/**
 *
 * @param {number[]} numbers целые числа, не превосходящие по модулю 1000
 * @returns {void} 

*/

const getType = (numbers) => {
  let type = null;

  for (let i = 1; i < numbers.length; i++) {
    const previous = numbers[i - 1];
    const current = numbers[i];
    if (!type) {
      if (current < previous) type = "DESCENDING";
      else if (current === previous) type = "CONSTANT";
      else type = "ASCENDING";
    } else if (type === "CONSTANT") {
      if (current < previous) type = "WEAKLY DESCENDING";
      else if (current > previous) type = "WEAKLY ASCENDING";
    } else if (type === "ASCENDING") {
      if (current < previous) type = "RANDOM";
      else if (current === previous) type = "WEAKLY ASCENDING";
    } else if (type === "WEAKLY ASCENDING") {
      if (current < previous) type = "RANDOM";
    } else if (type === "DESCENDING") {
      if (current === previous) type = "WEAKLY DESCENDING";
      else if (current > previous) type = "RANDOM";
    } else if (type === "WEAKLY DESCENDING") {
      if (current > previous) type = "RANDOM";
    }
  }
  console.log(type);
  fs.writeFileSync("output.txt", type);
};

getType(numbers);
