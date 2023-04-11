const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const lines = [];
rl.on("line", (line) => {
  lines.push(line);
}).on("close", () => {
  const [a, b, c] = lines;
  seventhTask(a, b, c);
});

/**
 

 * @param {string} a Клиент отправляет запрос на сервер и запоминает время отправления A 
 * @param {string} b Сервер получает запрос в момент времени B (по точному серверному времени) и отправляет клиенту сообщение, содержащее время B.
 * @param {string} c Клиент получает ответ на свой запрос в момент времени C (по клиентскому времени) и запоминает его

 * @returns {void}
 */

const seventhTask = (a, b, c) => {
  a = a.split(":").map((n) => parseInt(n));
  b = b.split(":").map((n) => parseInt(n));
  c = c.split(":").map((n) => parseInt(n));

  const aSec = a[0] * 3600 + a[1] * 60 + a[2];
  const bSec = b[0] * 3600 + b[1] * 60 + b[2];
  let cSec = c[0] * 3600 + c[1] * 60 + c[2];

  if (cSec < aSec) {
    cSec = cSec + 24 * 3600;
  }

  const result = Math.round((cSec - aSec) / 2) + bSec;

  let hours = Math.floor(result / 3600);

  let mins = Math.floor((result - hours * 3600) / 60);

  let seconds = Math.floor(result - hours * 3600 - mins * 60).toString();

  if (hours > 23) {
    hours = hours - 24;
  }
  hours = hours.toString();
  mins = mins.toString();

  hours = hours.length === 1 ? 0 + hours : hours;
  mins = mins.length === 1 ? 0 + mins : mins;
  seconds = seconds.length === 1 ? 0 + seconds : seconds;

  rl.output.write(`${hours}:${mins}:${seconds}`);
};
