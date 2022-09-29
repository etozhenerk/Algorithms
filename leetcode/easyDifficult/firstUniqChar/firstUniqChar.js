/**
 * @param {string} s
 * @return {number}
 */
const firstUniqChar = (s) => {
  const list = {};

  for (let i = 0; i < s.length; i++) {
    const element = s[i];

    if (list[element]) {
      list[element]++;
    } else {
      list[element] = 1;
    }
  }

  for (const key in list) {
    if (list[key] === 1) {
      return s.indexOf(key);
    }
  }

  return -1;
};
