const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const lines = [];
rl.on("line", (line) => {
  lines.push(line);
}).on("close", () => {
  const [word] = lines;
  tenthTask(word);
});

/**
 

 * @param {string} word  На вход подаётся строка, состоящая из строчных латинских букв — любимое слово Лёши. Длина строки лежит в пределах от 5 до 100 000 символов.

 * @returns {void}
 */

const tenthTask = (word) => {
  const list = {};

  for (let index = 0; index < word.length; index++) {
    const k = (word.length - index) * (index + 1);
    if (!list[word[index]]) {
      list[word[index]] = 0;
    }

    list[word[index]] += k;
  }

  const sorted = Object.keys(list).sort().reduce(
    (obj, key) => { 
      obj[key] = list[key]; 
      return obj;
    }, 
    {}
  );

  for (const key in sorted) {
    rl.output.write(`${key}: ${list[key]}\n`);
  }
};
