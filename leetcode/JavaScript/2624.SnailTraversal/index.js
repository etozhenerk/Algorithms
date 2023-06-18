/**
 * @param {number} rowsCount
 * @param {number} colsCount
 * @return {Array<Array<number>>}
 */
Array.prototype.snail = function (rowsCount, colsCount) {
  if (rowsCount * colsCount !== this.length) {
    return [];
  } else {
    const ans = new Array(rowsCount);
    for (let i = 0; i < ans.length; i++) {
      ans[i] = [];
    }
    let row = 0;
    let col = 0;
    for (let i = 0; i < this.length; i++) {
      ans[row].push(this[i]);
      if (col % 2 === 0) {
        if (row < rowsCount - 1) {
          row++;
        } else {
          col++;
        }
      } else {
        if (row > 0) {
          row--;
        } else {
          col++;
        }
      }
    }

    return ans;
  }
};
