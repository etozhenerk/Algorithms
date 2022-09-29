/**
 * @param {number} n
 * @return {number[]}
 */
const countBits = (n) => {
  const bits = [];

  for (let i = 0; i <= n; i++) {
    bits.push(i.toString(2));
  }

  const ans = bits.map((item) =>
    item.split("").reduce((acc, n) => acc + Number(n), 0)
  );

  return ans;
};
