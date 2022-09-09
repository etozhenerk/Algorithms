const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const lines = [];
rl.on("line", (line) => {
    lines.push(line);
}).on("close", () => {
    const [input] = lines;
    const result = taskB(input);

    rl.output.write(result);
});

/**
 *
 * @param {string} path Cтрока с абсолютным адресом, её длина не превосходит 100
 * @returns {string} канонический путь
 */

const taskB = (path) => {
    let answer = [""];
    const words = path.split("/");

    words.forEach((word) => {
        if (word.length > 0 && word !== "." && word !== "..") {
            answer.push(word);
        }
        if (word === ".." && answer.length > 1) {
            answer.pop();
        }
    });

    if (answer.length === 1) {
        answer.push("");
    }

    return answer.join("/");
};
