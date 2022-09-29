/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
const findTheDifferenceSlow = (s, t) => {
  const sLetters = {};
  const tLetters = {};

  for (let i = 0; i < s.length; i++) {
    const element = s[i];
    if (sLetters[element]) {
      sLetters[element]++;
    } else {
      sLetters[element] = 1;
    }
  }

  for (let i = 0; i < t.length; i++) {
    const element = t[i];
    if (tLetters[element]) {
      tLetters[element]++;
    } else {
      tLetters[element] = 1;
    }
  }

  for (const key in tLetters) {
    if (!sLetters[key] || tLetters[key] !== sLetters[key]) {
      return key;
    }
  }
};

const findTheDifferenceFast = (s, t) => {
  let sum1 = 0;
  for (let i = 0; i < s.length; i++) {
    sum1 += s[i].charCodeAt();
  }

  let sum2 = 0;
  for (let i = 0; i < t.length; i++) {
    sum2 += t[i].charCodeAt();
  }

  return String.fromCharCode(sum2 - sum1);
};
