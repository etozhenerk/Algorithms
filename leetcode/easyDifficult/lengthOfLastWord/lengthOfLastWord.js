/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLastWord = (s) => s.split(" ").filter(Boolean).pop().length;
