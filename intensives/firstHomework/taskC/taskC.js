const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const lines = [];
rl.on("line", (line) => {
    lines.push(line);
}).on("close", () => {
    const [days, price] = lines;
    const result = taskC(parseInt(days), price);

    rl.output.write(result.join(" "));
});

/**
 *
 * @param {number} days Число дней n (1 ≤ n ≤ 100000)
 * @param {string} price n чисел — цены за 1000 кубометров газа в каждый из дней. Цена — целое число от 1 до 5000. Дни нумеруются с единицы
 * @returns {[number, number]} два числа i и j — номера дней для покупки и продажи газа. Если прибыль получить невозможно, выведите два нуля
 */

const taskC = (days, price) => {
    const pricesArray = price.split(" ").map(Number);
    let minIndex = 0;
    let maxGas = 1 / pricesArray[0];
    let maxRevenue = 0;
    let answer = [0, 0];

    for (let i = 0; i <= days; i++) {
        if (maxGas * pricesArray[i] - 1 > maxRevenue) {
            maxRevenue = maxGas * pricesArray[i] - 1;
            answer = [minIndex + 1, i + 1];
        }

        if (1 / pricesArray[i] > maxGas) {
            minIndex = i;
            maxGas = 1 / pricesArray[i];
        }
    }

    return answer;
};
