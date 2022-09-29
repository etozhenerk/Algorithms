/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isAnagram = (s, t) => {
  const listS = {};
  const listT = {};

  if (s.length !== t.length) {
    return false;
  }

  for (let i = 0; i < s.length; i++) {
    const element = s[i];
    if (listS[element]) {
      listS[element]++;
    } else {
      listS[element] = 1;
    }
  }

  for (let i = 0; i < t.length; i++) {
    const element = t[i];
    if (listT[element]) {
      listT[element]++;
    } else {
      listT[element] = 1;
    }
  }

  for (const iterator in listS) {
    if (!listT[iterator] || listS[iterator] !== listT[iterator]) {
      return false;
    }
  }

  return true;
};
