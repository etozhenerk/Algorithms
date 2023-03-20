const fs = require("fs");
let word = fs.readFileSync("input.txt", "utf8").replace("\n", "").trim();

/**
 *
 * @param {number[]} word Входные данные содержат непустую строку, состоящую из строчных латинских букв, которую принёс заказчик.
 * @returns {void} Выведите одно целое число — минимальную сумму, которую заказчику придётся заплатить за превращение принесённой заказчиком строки в палиндром.
 */

const polindrome = (word) => {
  const middle = Math.floor(word.length / 2);

  let ans = 0;

  for (let i = 0; i < middle; i++) {
    if (word[i] !== word[word.length - 1 - i]) {
      ans++;
    }
  }

  fs.writeFileSync("output.txt", ans.toString());
};

polindrome(word);
