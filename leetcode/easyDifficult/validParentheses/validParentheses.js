/**
 * @param {string} string
 * @return {boolean}
 */
const isValid = (string) => {
    const list = {
        "(": ")",
        "[": "]",
        "{": "}",
    };

    let answer = true;

    for (let i = 0; i < string.length; i++) {
        if (i % 2 === 0) {
            if (list[string[i]] !== string[i + 1]) {
                answer = false;
                break;
            }
        }
    }

    return answer;
};

isValid("(]");
