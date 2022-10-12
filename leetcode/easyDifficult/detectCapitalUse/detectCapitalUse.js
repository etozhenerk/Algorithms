/**
 * @param {string} word
 * @return {boolean}
 */
const detectCapitalUse = (word) => {
  if (word.length === 1) {
    return true;
  }

  const isCapitalFirst = word[0] === word[0].toUpperCase();
  let isCapital = word[1] === word[1].toUpperCase();

  for (let i = 1; i < word.length; i++) {
    const letter = word[i];

    if (isCapitalFirst) {
      if (
        (letter === letter.toUpperCase() && !isCapital) ||
        (letter !== letter.toUpperCase() && isCapital)
      ) {
        return false;
      }
      isCapital = letter === letter.toUpperCase();
    } else {
      if (letter === letter.toUpperCase()) {
        return false;
      }
    }
  }

  return true;
};

const detectCapitalUse1Line = (word) =>
  word === word.toUpperCase() ||
  word === word[0] + word.substr(1).toLowerCase();
