/**
 * @param {string[]} words
 * @return {string[]}
 */
const findWords = (words) => {
  const ans = [];

  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    const set = getSet(word[0].toLowerCase());
    let flag = true;

    for (let j = 0; j < word.length; j++) {
      const element = word[j].toLowerCase();
      if (!set.has(element)) {
        flag = false;
      }
    }

    if (flag) {
      ans.push(word);
    }
  }

  return ans;
};

const getSet = (s) => {
  const firstSet = new Set("qwertyuiop");
  const secondSet = new Set("asdfghjkl");
  const thirdSet = new Set("zxcvbnm");
  if (firstSet.has(s)) {
    return firstSet;
  }
  if (secondSet.has(s)) {
    return secondSet;
  }
  if (thirdSet.has(s)) {
    return thirdSet;
  }
};
