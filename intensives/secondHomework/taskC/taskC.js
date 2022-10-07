const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const lines = [];
rl.on("line", (line) => {
  lines.push(line);
}).on("close", () => {
  const [str1, str2] = lines;
  const result = taskC(str1, str2);

  rl.output.write(result);
});

/**
 *
 * @param {string} str1 слова из словаря, слова состоят из маленьких латинских букв. Гарантируется, что словарь не пуст и количество слов в словаре не превышет 1000, а длина слов — 100 символов.
 * @param {string} str2 слова текста (они также состоят только из маленьких латинских букв). Количество слов в тексте не превосходит 105, а суммарное количество букв в них — 106.
 * @returns {string} текст, в котором осуществлены замены.
 */

const taskCVerySlow = (str1, str2) => {
  const shortWords = str1.split(" ").sort((a, b) => a.length - b.length);
  const words = str2.split(" ");

  const ans = words.map((word) => {
    for (let i = 0; i < shortWords.length; i++) {
      const element = shortWords[i];
      if (word.startsWith(element)) {
        return element;
      }
    }

    return word;
  });

  return ans.join(" ");
};

const taskC = (str1, str2) => {
  const shortWords = str1.split(" ");
  const set = new Set(shortWords);
  const words = str2.split(" ");

  const ans = words.map((word) => {
    let start = "";
    for (let i = 0; i < word.length; i++) {
      const letter = word[i];
      start += letter;
      if (set.has(start)) {
        return start;
      }
    }

    return word;
  });

  return ans.join(" ");
};
