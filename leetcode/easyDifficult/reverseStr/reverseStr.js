/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
const reverseStr = (s, k) => {
  const words = [];
  const ans = [];
  for (let i = 0; i < s.length; i += k) {
    words.push(s.substring(i, i + k));
  }
  for (let i = 0; i < words.length; i += 2) {
    const first = words[i].split("").reverse().join("");
    const next = words[i + 1] ? words[i + 1] : "";

    ans.push(first + next);
  }

  return ans.join("");
};
