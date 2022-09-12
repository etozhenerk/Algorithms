/**
 * @param {number} number integer
 * @return {boolean}
 */
const isPalindrome = (number) => {
    const string = number.toString();
    const middle = Math.floor(string.length / 2);

    let answer = true;

    for (let i = 0; i < middle; i++) {
        if (parseInt(string[i]) !== parseInt(string[string.length - 1 - i])) {
            answer = false;
        }
    }

    return answer;
};
