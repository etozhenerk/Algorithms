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
    .filter((a) => a !== "")
    .map((sentence) => sentence.split(""))
    .flat()
    .filter((a) => a !== " ")
    .sort();

  lettersArray.forEach((letter) => {
    if (Number(letter) || letter === "0") {
      letter = "+" + letter;
    }
    if (letter !== " " && letter !== "") {
      if (!letters[letter]) {
        letters[letter] = 0;
      }

      letters[letter]++;

      max = Math.max(max, letters[letter]);
    }
  });

  for (let row = max; row >= 0; row--) {
    for (const key in letters) {
      if (row === 0) {
        if (key.length === 2) {
          rl.output.write(key[1]);
        } else {
          rl.output.write(key);
        }
      } else if (letters[key] >= row) {
        rl.output.write("#");
      } else {
        rl.output.write(" ");
      }
    }
    rl.output.write("\n");
  }
};
