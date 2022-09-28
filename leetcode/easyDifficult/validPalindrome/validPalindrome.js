/**
 * @param {string} s
 * @return {boolean}
 */
const isPalindrome = (s) =>
    s
        .split(" ")
        .join("")
        .replace(/[^a-zA-Z0-9]+/g, "")
        .toLowerCase() ===
    s
        .split(" ")
        .join("")
        .replace(/[^a-zA-Z0-9]+/g, "")
        .split("")
        .reverse()
        .join("")
        .toLowerCase();

