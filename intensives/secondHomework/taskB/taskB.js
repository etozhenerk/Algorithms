const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const lines = [];
rl.on("line", (line) => {
    lines.push(line);
}).on("close", () => {
    const [numbers, array] = lines;
    const result = taskB(numbers, array);

    rl.output.write(result);
});

/**
 *
 * @param {string} numbers два числа n и k
 * @param {string} array n чисел, по модулю не превосходящих
 * @returns {string} YES, если найдется повторяющееся число и расстояние между повторами не превосходит k и NO в противном случае
 */

const taskB = (numbers, array) => {
    const [n, k] = numbers.split(" ");
    const list = {};

    array = array.split(" ");

    for (let i = 0; i < n; i++) {
        if (!list[array[i]] && list[array[i]] !== 0) {
            list[array[i]] = i;
        } else {
            if (i - list[array[i]] <= k) {
                return "YES";
            } else {
                list[array[i]] = i;
            }
        }
    }

    return "NO";
};

const taskBSet = (numbers, array) => {
    const [n, k] = numbers.split(" ");
    const set = new Set();

    array = array.split(" ");

    for (let i = 0; i < n; i++) {
        if (set.has(array[i])) {
            return "YES";
        }

        set.add(array[i]);

        if (i >= k) {
            set.delete(array[i - k]);
        }
    }

    return "NO";
};
