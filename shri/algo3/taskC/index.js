const fs = require("fs");
let [nk, ...numbers] = fs.readFileSync("input.txt", "utf8").trim().split("\n");
const [n, k] = nk.trim().split(" ").map(parseInt);
numbers = numbers.map((n) => parseInt(n));
/**
 *
 * @param {number} n количество лампочек.
 * @param {number[]} numbers количество лампочек каждого из k цветов.
 * @returns {void} В первой строке выведите максимальное количество гирлянд. В следующих n строках выведите описание гирлянды: в каждой строке выведите номер цвета лампочки, находящейся в гирлянде на очередном месте. Если возможных ответов несколько — выведите любой из них.
 */

const getMaxGarlands = (n, numbers) => {
    const diff = n > numbers.length ? n - numbers.length : n;
    const sortedNumbers = numbers.map((item, i) => [item, i + 1]).sort();
    let minCount = n > numbers.length ? Math.min(...numbers) : sortedNumbers[sortedNumbers.length - 1][0];
    let ans = n > numbers.length ? numbers.map((_, i) => i + 1) : [];

    for (let index = sortedNumbers.length - 1; index >= sortedNumbers.length - diff; index--) {
        if (sortedNumbers[index][0] > 0) {
            minCount = Math.min(minCount, sortedNumbers[index][0]);
            ans.push(sortedNumbers[index][1]);
        }
    }
    // ans.sort();
    fs.writeFileSync("output.txt", `${minCount}\n${ans.join("\n")}`);
};

getMaxGarlands(n, numbers);
