const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const lines = [];
rl.on("line", (line) => {
    lines.push(line);
}).on("close", () => {
    const [string] = lines;
    const result = taskE(string);

    rl.output.write(result);
});

/**
 *
 * @param {string} string строка-палиндром, состоящая из маленьких букв латинского алфавита. Длина строки не превосходит 1000
 * @returns {string} Лексикографически минимальная строка, не являющуюяся палиндромом, полученная из исходной строки заменой одного символа.
 * Если получить такую строку невозможно - возвращается пустая строка
 */

const taskE = (string) => {
    let middle = Math.floor(string.length / 2);
    let isChange = false;
    let ans = "";

    if (string.length === 1) {
        return ans;
    }

    for (let i = 0; i < middle; i++) {
        if (string[i] !== "a") {
            ans = string.slice(0, i) + "a" + string.slice(i + 1, string.length);
            isChange = true;
            break;
        }
    }

    if (!isChange) {
        ans = string.slice(0, string.length - 1) + "b";
    }

    return ans;
};
