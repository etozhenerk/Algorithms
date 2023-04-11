const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const lines = [];
rl.on("line", (line) => {
  lines.push(line);
}).on("close", () => {
  const [first, second] = lines;
  drunkGame(first, second);
});

/**
 *
 * @param {string} first первая строка содержит 5 чисел, разделенных пробелами — номера карт первого игрока
 * @param {string} second вторая – аналогично 5 карт второго игрока
 * @returns {void} Программа должна определить, кто выигрывает при данной раздаче, и вывести слово first или second, после чего вывести количество ходов, сделанных до выигрыша.
 */

const drunkGame = (first, second) => {
  first = first
    .trim()
    .split(" ")
    .map((i) => parseInt(i));
  second = second
    .trim()
    .split(" ")
    .map((i) => parseInt(i));

  let counter = 0;

  while (first.length > 0 && second.length > 0) {
    if (counter === 10 ** 6) {
      rl.output.write("botva");

      return;
    }

    const firstCard = first.shift();
    const secondCard = second.shift();

    if (firstCard > secondCard) {
      if (firstCard === 9 && secondCard === 0) {
        second.push(firstCard);
        second.push(secondCard);
      } else {
        first.push(firstCard);
        first.push(secondCard);
      }
    } else {
      if (firstCard === 0 && secondCard === 9) {
        first.push(firstCard);
        first.push(secondCard);
      } else {
        second.push(firstCard);
        second.push(secondCard);
      }
    }
    counter++;
  }

  if (first.length > second.length) {
    rl.output.write("first " + counter.toString());
  } else {
    rl.output.write("second " + counter.toString());
  }
};
