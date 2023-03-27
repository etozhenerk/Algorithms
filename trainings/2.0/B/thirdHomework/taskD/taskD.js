const fs = require("fs");
let strings = fs.readFileSync("input.txt", "utf8").split("\n");
/**
 *
 * @param {string[]} strings Каждая строка представляет собой набор чисел, разделенных пробелами. После каждой строки с вопросом идет ответ Августа: YES или NO.
 * @returns {void} Вы должны вывести (через пробел, в порядке возрастания) все числа, которые мог задумать Август.
 */

const taskD = (strings) => {
  let ans = new Set();
  let numbers = new Set();

  for (let i = 1; i <= parseInt(strings[0]); i++) {
    ans.add(i);
  }

  for (let i = 1; i < strings.length; i++) {
    if (
      strings[i].replace("\r", "") === "YES" ||
      strings[i].replace("\r", "") === "NO"
    ) {
      numbers = new Set(
        strings[i - 1].split(" ").map((item) => parseInt(item))
      );

      if (strings[i].replace("\r", "") === "YES") {
        ans.forEach((item) => {
          if (!numbers.has(item)) {
            ans.delete(item);
          }
        });
      } else if (strings[i].replace("\r", "") === "NO") {
        numbers.forEach((item) => {
          ans.delete(item);
        });
      }
    }
  }

  fs.writeFileSync("output.txt", Array.from(ans).join(" "));
};

taskD(strings);
