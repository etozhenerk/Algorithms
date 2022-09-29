/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
const wordPattern = (pattern, s) => {
  const words = s.split(" ");
  const listWord = {};
  const listPattern = {};

  if (pattern.length !== words.length) {
    return false;
  }

  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    const pat = pattern[i];
    if (!listPattern[pat] && !listWord[word]) {
      listPattern[pat] = word;
    }

    if (!listWord[word]) {
      listWord[word] = pat;
    }

    if (listPattern[pat] !== word) {
      return false;
    }
  }
  return true;
};
