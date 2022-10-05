/**
 * @param {string} s
 * @return {number}
 */
const countSegments = (s) => s.split(" ").filter(Boolean).length;
