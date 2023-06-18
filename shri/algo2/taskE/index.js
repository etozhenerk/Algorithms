const fs = require("fs");
let [n, numbers] = fs.readFileSync("input.txt", "utf8").split("\n");
n = parseInt(n);
numbers = numbers
    .trim()
    .split(" ")
    .map((n) => parseInt(n));
/**
 *
 * @param {number} n количество элементов массива a.
 * @param {number[]} numbers элементы массива a.
 * @returns {void} Выведите одно число — ответ на задачу.

*/

const findMin = (n, numbers) => {
    const list = {};
    let maxLength = 0;

    for (let i = 0; i < numbers.length; i++) {
        const element = numbers[i];

        if (!list[element]) {
            list[element] = 0;
        }

        list[element]++;
    }
    for (const key in list) {
        const element = list[key];

        const elemBefore = list[key - 1] ? list[key - 1] : 0;
        const elemAfter = list[key + 1] ? list[key + 1] : 0;

        const maxElementsLength = element + Math.max(elemBefore, elemAfter);

        maxLength = Math.max(maxElementsLength, maxLength);
    }

    const ans = numbers.length - maxLength;

    fs.writeFileSync("output.txt", ans.toString());
};

findMin(n, numbers);
