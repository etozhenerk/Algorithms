const fs = require("fs");
let votes = fs.readFileSync("input.txt", "utf8").split("\n");
votes = votes.filter((item) => item !== "").map((item) => item.split(" "));
/**
 *
 * @param {[string, string][]} votes Каждая строка входного файла содержит фамилию кандидата, за которого отдают голоса выборщики этого штата, затем через пробел идет количество выборщиков, отдавших голоса за этого кандидата.
 * @returns {void} Выведите фамилии всех кандидатов в лексикографическом порядке, затем, через пробел, количество отданных за них голосов.
 */

const taskB = (votes) => {
  const votesSum = new Map();

  for (let i = 0; i < votes.length; i++) {
    const [state, value] = votes[i];
    votesSum.set(state, (votesSum.get(state) || 0) + parseInt(value));
  }
  const votesKeys = [...votesSum.keys()].sort();

  const ans = votesKeys.reduce(
    (prev, curr) => prev + `${curr} ${votesSum.get(curr)}\n`,
    ""
  );
  fs.writeFileSync("output.txt", ans);
};

taskB(votes);
