const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const lines = [];
rl.on("line", (line) => {
    lines.push(line);
}).on("close", () => {
    firstTask(lines);
});

/**
 *
 * @param {string[]} input зашифрованный текст сообщения
 * @returns {void}
 */

const firstTask = (input) => {
    let letters = {};

    let max = 0;

    const lettersArray = input
        .map((sentence) => sentence.trim().split(" "))
        .flat()
        .map((word) => word.trim().split(""))
        .flat();

    lettersArray.forEach((letter) => {
        if (!letters[letter]) {
            letters[letter] = 0;
        }

        letters[letter]++;

        max = Math.max(max, letters[letter]);
    });

    letters = Object.keys(letters)
        .sort()
        .reduce((obj, key) => {
            obj[key] = letters[key];
            return obj;
        }, {});

    for (let row = max; row > 0; row--) {
        for (const key in letters) {
            if (letters[key] >= row) {
                rl.output.write("#");
            } else {
                rl.output.write(" ");
            }
        }
        rl.output.write("\n");
    }
    for (const key in letters) {
        rl.output.write(key);
    }
};
