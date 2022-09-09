/**
 * @param {string} string
 * @return {number}
 */
const romanToInt = (string) => {
    const numbersList = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000,
    };
    const numbers = [];

    let answer = 0;

    for (let i = 0; i < string.length; i++) {
        numbers.push(numbersList[string[i]]);
    }

    for (let i = numbers.length - 1; i > 0; i--) {
        if (numbers[i - 1] >= numbers[i]) {
            answer = answer + numbers[i - 1];
        } else {
            answer = answer - numbers[i - 1];
        }
    }

    answer = answer + numbers[numbers.length - 1];

    return answer;
};
