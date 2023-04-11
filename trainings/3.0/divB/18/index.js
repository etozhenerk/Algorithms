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
  dequeFunction(commands);
});

/**
 *
 * @param {string[]} commands Вводятся команды управления стеком, по одной на строке
 * @returns {void} Программа должна вывести протокол работы очереди, по одному сообщению на строке
 */

const dequeFunction = (commands) => {
  let dequeue = [];

  for (let index = 0; index < commands.length; index++) {
    const command = commands[index];

    if (command.startsWith("push_front")) {
      dequeue = [parseInt(command.split(" ")[1]), ...dequeue];
      rl.output.write("ok\n");
    } else if (command.startsWith("push_back")) {
      dequeue.push(parseInt(command.split(" ")[1]));
      rl.output.write("ok\n");
    } else if (command.startsWith("pop_front")) {
      if (dequeue.length === 0) {
        rl.output.write("error\n");
      } else {
        rl.output.write(dequeue.shift().toString() + "\n");
      }
    } else if (command.startsWith("pop_back")) {
      if (dequeue.length === 0) {
        rl.output.write("error\n");
      } else {
        rl.output.write(dequeue.pop().toString() + "\n");
      }
    } else if (command.startsWith("front")) {
      if (dequeue.length === 0) {
        rl.output.write("error\n");
      } else {
        rl.output.write(dequeue[0].toString() + "\n");
      }
    } else if (command.startsWith("back")) {
      if (dequeue.length === 0) {
        rl.output.write("error\n");
      } else {
        rl.output.write(dequeue[dequeue.length - 1].toString() + "\n");
      }
    } else if (command.startsWith("size")) {
      rl.output.write(dequeue.length.toString() + "\n");
    } else if (command.startsWith("clear")) {
      dequeue = [];
      rl.output.write("ok\n");
    } else if (command.startsWith("exit")) {
      rl.output.write("bye\n");

      return;
    }
  }
};
