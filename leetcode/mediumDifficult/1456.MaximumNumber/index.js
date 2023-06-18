/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
const maxVowels = function (s, k) {
  const letters = new Set(["a", "e", "i", "o", "u"]);

  let count = 0;
  for (let i = 0; i < k; i++) {
    if (letters.has(s[i])) {
      count++;
    }
  }
  let max = count;

  for (let i = k; i < s.length; i++) {
    if (letters.has(s[i])) {
      count++;
    }
    if (letters.has(s[i - k])) {
      count--;
    }
    max = Math.max(max, count);
  }
  return max;
};
