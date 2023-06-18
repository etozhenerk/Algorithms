const fs = require("fs");
let [str] = fs.readFileSync("input.txt", "utf8").split("\n");
str = str.trim();
/**
 *
 * @param {string} str непустая строка четной длины состоящая из символов «R», «G» или «B» и цифр от 

 * @returns {void} количество палочек, на которых имеются кольца всех трёх цветов.

*/

const findStick = (str) => {
    const list = {};
    let count = 0;

    for (let i = 1; i < str.length; i += 2) {
        const element = str[i];

        if (!list[element]) {
            list[element] = new Set();
        }

        list[element].add(str[i - 1]);
    }

    for (const key in list) {
        if (list[key].size === 3) {
            count++;
        }
    }
    fs.writeFileSync("output.txt", count.toString());
};

findStick(str);
