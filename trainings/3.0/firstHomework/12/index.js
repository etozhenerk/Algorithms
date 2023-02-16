const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const lines = [];
rl.on("line", (line) => {
    lines.push(line);
}).on("close", () => {
    const [sequence] = lines;
    correctBracketSequenceFunction(sequence);
});

/**
 *
 * @param {string} sequence Вводятся команды управления стеком, по одной на строке
 * @returns {void} Программа должна вывести протокол работы стека, по одному сообщению на строке
 */

const correctBracketSequenceFunction = (sequence) => {
    const brackets = {
        ")": "(",
        "]": "[",
        "}": "{",
    };
    const stack = [];
    for (let index = 0; index < sequence.length; index++) {
        if ([")", "]", "}"].indexOf(sequence[index]) > -1) {
            if (brackets[sequence[index]] !== stack.pop()) {
                rl.output.write("no");
                return;
            }
        } else {
            stack.push(sequence[index]);
        }
    }
    if (stack.length === 0) {
        rl.output.write("yes");
    } else {
        rl.output.write("no");
    }
};
