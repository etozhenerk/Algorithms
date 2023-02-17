const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const lines = [];
rl.on("line", (line) => {
  lines.push(line);
}).on("close", () => {
  const [k, numbers] = lines;
  findIndexFunction(numbers);
});

/**
 *
 * @param {string} numbers средняя цена проживания в городах с нулевого по (N - 1)-ый соответственно
 * @returns {void} Для каждого города в порядке с нулевого по (N - 1)-ый выведите номер города, в который переселятся его изначальные жители. Если жители города не остановятся в каком-либо другом городе, отправившись в Восточное Бесконечное Ничто, выведите -1 .
 */

const findIndexFunction = (numbers) => {
  numbers = numbers.split(" ").map((n) => parseInt(n));
  const answer = new Array(numbers.length);
  const stack = [];

  for (let index = 0; index < numbers.length; index++) {
    const element = numbers[index];
    while (stack.length !== 0 && stack[stack.length - 1][0] > element) {
      const number = stack.pop();

      answer[number[1]] = index;
    }
    stack.push([element, index]);
  }

  for (let index = 0; index < stack.length; index++) {
    const element = stack[index];
    answer[element[1]] = -1;
  }

  rl.output.write(answer.join(" "));
};
