/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
const canConstruct = (ransomNote, magazine) => {
  const list = {};

  for (let i = 0; i < magazine.length; i++) {
    const element = magazine[i];
    if (list[element]) {
      list[element]++;
    } else {
      list[element] = 1;
    }
  }

  for (let i = 0; i < ransomNote.length; i++) {
    const element = ransomNote[i];

    if (list[element] && list[element] !== 0) {
      list[element]--;
    } else {
      return false;
    }
  }

  return true;
};
