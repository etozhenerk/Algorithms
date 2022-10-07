/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
const licenseKeyFormatting = (s, k) => {
  const newStr = s.replace(/-/g, "").toUpperCase();
  const ans = newStr.split("");

  for (let i = ans.length - 1 - k; i >= 0; i -= k) {
    ans[i] = ans[i] + "-";
  }

  return ans.join("");
};
