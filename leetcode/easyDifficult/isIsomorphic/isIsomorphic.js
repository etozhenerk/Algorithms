/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isIsomorphic = (s, t) => {
  const listS = {};
  const listT = {};

  for (let i = 0; i < s.length; i++) {
    const letterS = s[i];
    const letterT = t[i];
    if (!listS[letterS]) {
      listS[letterS] = letterT;
    }
    if (!listT[letterT]) {
      listT[letterT] = letterS;
    }

    if (listS[letterS] !== letterT) {
      return false;
    }

    if (listT[letterT] !== letterS) {
      return false;
    }
  }

  return true;
};
