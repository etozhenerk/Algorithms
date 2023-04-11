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
  queueFunction(commands);
});

/**
 *
 * @param {string[]} commands Вводятся команды управления стеком, по одной на строке
 * @returns {void} Программа должна вывести протокол работы очереди, по одному сообщению на строке
 */

const queueFunction = (commands) => {
  let queue = [];

  for (let index = 0; index < commands.length; index++) {
    const command = commands[index];

    if (command.startsWith("push")) {
      queue.push(parseInt(command.split(" ")[1]));
      rl.output.write("ok\n");
    } else if (command.startsWith("pop")) {
      if (queue.length === 0) {
        rl.output.write("error\n");
      } else {
        rl.output.write(queue.shift().toString() + "\n");
      }
    } else if (command.startsWith("front")) {
      if (queue.length === 0) {
        rl.output.write("error\n");
      } else {
        rl.output.write(queue[0].toString() + "\n");
      }
    } else if (command.startsWith("size")) {
      rl.output.write(queue.length.toString() + "\n");
    } else if (command.startsWith("clear")) {
      queue = [];
      rl.output.write("ok\n");
    } else if (command.startsWith("exit")) {
      rl.output.write("bye\n");

      return;
    }
  }
};
