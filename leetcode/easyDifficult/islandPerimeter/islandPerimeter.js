/**
 * @param {number[][]} grid
 * @return {number}
 */
const islandPerimeter = (grid) => {
  let ans = 0;

  for (let i = 0; i < grid.length; i++) {
    const row = grid[i];
    for (let j = 0; j < row.length; j++) {
      const cell = row[j];
      if (cell) {
        ans += 4;
        if (row[j - 1]) {
          ans -= 1;
        }
        if (row[j + 1]) {
          ans -= 1;
        }
        if (grid[i - 1] && grid[i - 1][j]) {
          ans -= 1;
        }
        if (grid[i + 1] && grid[i + 1][j]) {
          ans -= 1;
        }
      }
    }
  }

  return ans;
};
