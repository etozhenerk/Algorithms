/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
const findContentChildren = (g, s) => {
  let ans = 0;

  g.sort((a, b) => a - b);
  s.sort((a, b) => a - b);

  for (let i = 0; i < s.length; i++) {
    if (s[i] >= g[ans]) {
      ans++;
    }
  }

  return ans;
};
