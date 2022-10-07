const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const lines = [];
rl.on("line", (line) => {
  lines.push(line);
}).on("close", () => {
  const [firstLength, firstList, secondLength, secondList] = lines;
  const result = taskE(firstList, secondList);

  rl.output.write(result);
});

/**
 *
 * @param {string} firstList n слов через пробел — список желательных веществ.
 * @param {string} secondList k слов через пробел — список веществ, полученных в реакторе.
 * @returns {string} текст, в котором осуществлены замены.
 */

const taskE = (firstList, secondList) => {
  firstList = firstList.split(" ");
  secondList = secondList.split(" ");

  const set = new Set(firstList);
  const lowMap = new Map();
  const map = new Map();

  for (let i = 0; i < firstList.length; i++) {
    const mapElement = firstList[i].toLowerCase().replace(/[aeiou]/gi, "#");
    const lowMapelement = firstList[i].toLowerCase();

    if (!map.has(mapElement)) {
      map.set(mapElement, firstList[i]);
    }

    if (!lowMap.has(lowMapelement)) {
      lowMap.set(lowMapelement, firstList[i]);
    }
  }

  const ans = secondList.map((item) => {
    const mapItem = item.toLowerCase().replace(/[aeiou]/gi, "#");
    const lowMapItem = item.toLowerCase();

    if (set.has(item)) {
      return item;
    }
    if (lowMap.has(lowMapItem)) {
      return lowMap.get(lowMapItem);
    }

    if (map.has(mapItem)) {
      return map.get(mapItem);
    }

    return "";
  });

  return ans.join(" ");
};
