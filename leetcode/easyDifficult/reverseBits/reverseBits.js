/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
const reverseBits = (n) =>
  Number.parseInt(
    n.toString(2).split("").reverse().join("").padEnd(32, "0"),
    2
  );
