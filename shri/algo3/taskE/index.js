const fs = require("fs");
let [nk, numbers] = fs.readFileSync("input.txt", "utf8").trim().split("\n");
const [n, k] = nk
    .trim()
    .split(" ")
    .map((item) => parseInt(item));

numbers = numbers
    .trim()
    .split(" ")
    .map((n) => parseInt(n));
/**
 *
 * @param {number} n количество ингредиентов.
 * @param {number} n количество зелий.
 * @param {number[]} numbers полезность ингредиентов.
 * @returns {void} максимальную суммарную полезность зелий
 */

const getMax = (n, k, numbers) => {
    console.log(n);
    console.log(k);
    console.log(numbers);
    // fs.writeFileSync("output.txt", `${minCount}\n${ans.join("\n")}`);
};

getMax(n, k, numbers);
