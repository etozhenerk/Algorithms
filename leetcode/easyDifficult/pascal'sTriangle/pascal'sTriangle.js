/**
 * @param {number} numRows
 * @return {number[][]}
 */
const generate = (numRows) => {
  const ans = [[1]];

  for (let i = 0; i < numRows - 1; i++) {
    const arr = [1];
    for (let j = 0; j < ans[i].length - 1; j++) {
      arr.push(ans[i][j] + ans[i][j + 1]);
    }
    arr.push(1);
    ans.push(arr);
  }

  return ans;
};
