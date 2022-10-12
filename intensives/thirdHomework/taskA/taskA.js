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
  const result = taskA(str1, str2);

  rl.output.write(result);
});

/**
 *
 * @param {string} str1
 * @param {string} str2
 * @returns {string}
 */

const taskA = (str1, str2) => {
  if (str1.length !== str2.length) {
    return "NO";
  }

  const createList = (str) => {
    const list = {};
    for (let i = 0; i < str.length; i++) {
      if (!list[str[i]]) {
        list[str[i]] = 0;
      }

      list[str[i]] += 1;
    }

    return list;
  };

  const list1 = createList(str1);
  const list2 = createList(str2);

  for (const letter in list1) {
    if (!list2[letter] || list2[letter] !== list1[letter]) {
      return "NO";
    }
  }

  for (const letter in list2) {
    if (!list1[letter] || list2[letter] !== list1[letter]) {
      return "NO";
    }
  }

  return "YES";
};
