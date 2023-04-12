const fs = require("fs");
let text = fs.readFileSync("input.txt", "utf8").split("\n");
/**
 *
 * @param {string[]} text Вводится текст.
 * @returns {void} Выведите ответ на задачу.
 */

const taskC = (text) => {
  text = text
    .map((item) => item.split(" "))
    .flat()
    .map((item) => item.replace("\r", ""))
    .filter((item) => item !== "");

  const words = new Map();

  text.forEach((word) => {
    words.set(word, (words.get(word) || 0) + 1);
  });

  const wordsArray = [...words.keys()].sort(
    (a, b) => words.get(b) - words.get(a) || a.localeCompare(b)
  );

  const ans = wordsArray.join("\n");

  fs.writeFileSync("output.txt", ans);
};

taskC(text);
