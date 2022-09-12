/**
 * @param {string[]} strs
 * @return {string}
 */
const longestCommonPrefix = (strs) => {
    let minStr = strs[0];
    let answer = "";

    for (let i = 1; i < strs.length; i++) {
        if (strs[i].length < minStr.length) {
            minStr = strs[i];
        }
    }

    for (let i = 0; i < minStr.length; i++) {
        let includes = true;
        for (let j = 0; j < strs.length; j++) {
            const element = strs[j];
            if (element[i] !== minStr[i]) {
                includes = false;
            }
        }

        if (includes) {
            answer += minStr[i];
        } else {
            break;
        }
    }

    return answer;
};
