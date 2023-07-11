const fs = require("fs");

let [file, n, ...dirs] = fs.readFileSync("input.txt", "utf8").split("\n");
file = file.trim();
dirs = dirs.map((item) => item.replace("\r", ""));

/**
 *
 * @param {string} file имя искомого файла
 * @param {string[]} dirs директории
 * @returns {string} ответ на задачу.
 */

const getPath = (file, dirs) => {
  let path = [];
  let ans = "";
  for (let i = 0; i < dirs.length; i++) {
    const element = dirs[i];
    const nowFile = element.trim();
    let spaces = 0;
    while (spaces < element.length && element[spaces] === " ") {
      spaces += 1;
    }
    path = path.slice(0, spaces);
    path.push(nowFile);

    if (file === nowFile) {
      ans = "/" + path.join("/");
      break;
    }
  }

  return ans;
};

const ans = getPath(file, dirs);

fs.writeFileSync("output.txt", ans);
