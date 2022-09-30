/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
const hammingDistance = (x, y) => (x ^ y).toString(2).replace(/0/g, "").length;
