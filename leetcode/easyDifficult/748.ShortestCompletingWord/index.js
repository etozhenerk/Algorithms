/**
 * @param {string} licensePlate
 * @param {string[]} words
 * @return {string}
 */
const shortestCompletingWord = (licensePlate, words) => {
  words = words.sort((a, b) => a.length - b.length);
  const licenseLettersCounts = new Map();

  for (let i = 0; i < licensePlate.length; i++) {
    const letter = licensePlate[i].toLowerCase();

    if (!parseInt(letter) && letter !== " " && letter !== "0") {
      licenseLettersCounts.set(
        letter,
        (licenseLettersCounts.get(letter) || 0) + 1
      );
    }
  }

  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    const wordLettersCount = new Map();

    for (let j = 0; j < word.length; j++) {
      const letter = word[j].toLowerCase();
      if (licenseLettersCounts.has(letter)) {
        wordLettersCount.set(letter, (wordLettersCount.get(letter) || 0) + 1);
      }
    }
    if (licenseLettersCounts.size !== wordLettersCount.size) {
      continue;
    }

    if (compareMap(wordLettersCount, licenseLettersCounts)) {
      return word;
    }
  }
};

const compareMap = (map1, map2) => {
  for (let [key, value] of map1.entries()) {
    if (value < map2.get(key)) return false;
  }
  return true;
};
