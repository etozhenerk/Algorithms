/**
 * @param {string} s
 * @param {character} c
 * @return {number[]}
 */
const shortestToChar = (s, c) => {
  const indexesOfC = [];
  const ans = [];

  for (let i = 0; i < s.length; i++) {
    const letter = s[i];

    if (letter === c) {
      indexesOfC.push(i);
    }
  }

  for (let i = 0; i < s.length; i++) {
    const dists = indexesOfC.map((item) => Math.abs(i - item));
    const minDist = Math.min(...dists);
    ans.push(minDist);
  }

  return ans;
};

