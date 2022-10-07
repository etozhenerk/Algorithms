/**
 * @param {number} num
 * @return {number}
 */
const findComplement = (num) =>
  parseInt(
    num
      .toString(2)
      .split("")
      .map((i) => (Number(i) ? 0 : 1))
      .join(""),
    2
  );

console.log(findComplement(5));
