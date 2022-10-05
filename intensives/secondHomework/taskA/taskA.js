const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const lines = [];
rl.on("line", (line) => {
    lines.push(line);
}).on("close", () => {
    const [firstLength, firstList, secondLength, secondList, thirdLength, thirdList] = lines;
    const result = taskA(firstLength, firstList, secondLength, secondList, thirdLength, thirdList);

    rl.output.write(result);
});

/**
 *
 * @param {string} firstLength длинна списка
 * @param {string} firstArr список чисел
 * @param {string} secondLength длинна списка
 * @param {string} secondArr список чисел
 * @param {string} thirdLength длинна списка
 * @param {string} thirdArr список чисел
 * @returns {string} числа, которые содержатся хотя бы в двух списках из трёх
 */

const taskA = (firstLength, firstArr, secondLength, secondArr, thirdLength, thirdArr) => {
    const addToList = (arrList, list) => {
        for (const key in arrList) {
            if (!list[key]) {
                list[key] = 0;
            }

            list[key] += 1;
        }
    };

    const createList = (n, arr) => {
        const list = {};
        for (let i = 0; i < n; i++) {
            if (!list[arr[i]]) {
                list[arr[i]] = 1;
            }
        }

        return list;
    };

    firstArr = firstArr.split(" ");
    secondArr = secondArr.split(" ");
    thirdArr = thirdArr.split(" ");

    const list = {};
    const ans = [];

    const firstList = createList(parseInt(firstLength), firstArr);
    const secondList = createList(parseInt(secondLength), secondArr);
    const thirdList = createList(parseInt(thirdLength), thirdArr);

    addToList(firstList, list);
    addToList(secondList, list);
    addToList(thirdList, list);

    for (const key in list) {
        if (list[key] >= 2) {
            ans.push(key);
        }
    }

    return ans.length > 0 ? ans.sort((a, b) => a - b).join(" ") : "";
};
