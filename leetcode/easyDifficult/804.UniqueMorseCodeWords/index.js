/**
 * @param {string[]} words
 * @return {number}
 */
const uniqueMorseRepresentations = (words) => {
  const morceCode = [
    ".-",
    "-...",
    "-.-.",
    "-..",
    ".",
    "..-.",
    "--.",
    "....",
    "..",
    ".---",
    "-.-",
    ".-..",
    "--",
    "-.",
    "---",
    ".--.",
    "--.-",
    ".-.",
    "...",
    "-",
    "..-",
    "...-",
    ".--",
    "-..-",
    "-.--",
    "--..",
  ];

  const uniqueCodes = new Set();

  for (let i = 0; i < words.length; i++) {
    const word = words[i];

    const code = word
      .split("")
      .reduce((prev, curr) => prev + morceCode[curr.charCodeAt(0) - 97], "");

    uniqueCodes.add(code);
  }

  return uniqueCodes.size;
};
