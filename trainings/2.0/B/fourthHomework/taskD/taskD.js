const fs = require("fs");
let data = fs.readFileSync("input.txt", "utf8").split("\n");
data = data
  .filter((item) => item !== "")
  .map((item) => {
    const party = item.split(" ");
    const votes = parseInt(party.pop());

    return [party.join(" "), votes];
  });
/**
 *
 * @param {[string, number][]} data На вход программе подается список партий, участвовавших в выборах. Каждая строка входного файла содержит название партии (строка, возможно, содержащая пробелы), затем, через пробел, количество голосов, полученных данной партией – число, не превосходящее 108.
 * @returns {void} Программа должна вывести названия всех партий и количество голосов в парламенте, полученных данной партией. Названия необходимо выводить в том же порядке, в котором они шли во входных данных.
 */

const taskD = (data) => {
  let freePlaces = 450;
  const partiesWithVotes = new Map();
  const sumOfVotes = data.reduce((prev, curr) => prev + curr[1], 0);
  const firstElectoralPrivate = sumOfVotes / 450;
  const partyPlaces = data
    .map((item) => {
      const [party, votes] = item;

      const places = Math.floor(votes / firstElectoralPrivate);
      const fractPart = (votes / firstElectoralPrivate) % 1;

      freePlaces -= places;

      partiesWithVotes.set(party, places);

      return [party, places, fractPart];
    })
    .sort((a, b) => b[2] - a[2] || b[1] - a[1]);

  let i = 0;

  while (freePlaces > 0) {
    partiesWithVotes.set(partyPlaces[i][0], ++partyPlaces[i][1]);

    i++;
    freePlaces--;
  }

  const ans = [...partiesWithVotes.keys()].reduce(
    (prev, curr) => prev + `${curr} ${partiesWithVotes.get(curr)}\n`,
    ""
  );

  fs.writeFileSync("output.txt", ans);
};

taskD(data);
