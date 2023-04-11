const fs = require("fs");
let strings = fs.readFileSync("input.txt", "utf8").split("\n");
/**
 *
 * @param {string[]} strings Сначала задано число - количество свидетелей. Далее идет M строк, каждая из которых описывает показания очередного свидетеля. Эти строки непустые и состоят из не более чем 20 символов. Каждый символ в строке - либо цифра, либо заглавная латинская буква, причём символы могут повторяться.
                             Затем идёт число - количество номеров. Следующие строки представляют из себя номера подозреваемых машин и имеют такой же формат, как и показания свидетелей.
 * @returns {void} Выпишите номера автомобилей, согласующиеся с максимальным количеством свидетелей. Если таких номеров несколько, то выведите их в том же порядке, в котором они были заданы на входе.
 */

const taskE = (strings) => {
  const m = parseInt(strings[0]);
  const cars = [];
  const carsCounts = [];
  let max = 0;
  let ans = [];

  for (let i = m + 2; i < strings.length - 1; i++) {
    cars.push(strings[i]);
    carsCounts.push(0);
  }

  for (let i = 1; i <= m; i++) {
    const witnessStatement = strings[i];
    cars.forEach((car, index) => {
      let isInclude = true;

      for (let j = 0; j < witnessStatement.length; j++) {
        const letter = witnessStatement[j];

        if (!car.includes(letter)) {
          isInclude = false;
        }
      }
      if (isInclude) {
        carsCounts[index]++;
      }

      if (carsCounts[index] > max) {
        max = carsCounts[index];
      }
    });
  }

  ans = cars.filter((item, i) => carsCounts[i] === max);

  fs.writeFileSync("output.txt", Array.from(ans).join("\n"));
};

taskE(strings);
