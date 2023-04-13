/**
 * @param {string} s
 * @return {number[]}
 */
const diStringMatch = (s) => {
  const ans = [];
  let i = 0;
  let d = s.length;

  for (let index = 0; index < s.length; index++) {
    const element = s[index];
    if (element === "I") {
      ans.push(i++);
    } else {
      ans.push(d--);
    }
  }

  if (s[s.length - 1] == "I") {
    ans.push(d);
  } else {
    ans.push(i);
  }

  return ans;
};
