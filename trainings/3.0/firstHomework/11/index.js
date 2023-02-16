const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const lines = [];
rl.on("line", (line) => {
    lines.push(line);
}).on("close", () => {
    const [...commands] = lines;
    stackFunction(commands);
});

/**
 *
 * @param {string[]} commands Вводятся команды управления стеком, по одной на строке
 * @returns {void} Программа должна вывести протокол работы стека, по одному сообщению на строке
 */

const stackFunction = (commands) => {
    let stack = [];

    for (let index = 0; index < commands.length; index++) {
        const command = commands[index];

        if (command.startsWith("push")) {
            stack.push(parseInt(command.split(" ")[1]));
            rl.output.write("ok\n");
        } else if (command.startsWith("pop")) {
            if (stack.length === 0) {
                rl.output.write("error\n");
            } else {
                rl.output.write(stack.pop().toString() + "\n");
            }
        } else if (command.startsWith("back")) {
            if (stack.length === 0) {
                rl.output.write("error\n");
            } else {
                rl.output.write(stack[stack.length - 1].toString() + "\n");
            }
        } else if (command.startsWith("size")) {
            rl.output.write(stack.length.toString() + "\n");
        } else if (command.startsWith("clear")) {
            stack = [];
            rl.output.write("ok\n");
        } else if (command.startsWith("exit")) {
            rl.output.write("bye\n");

            return;
        }
    }
};
