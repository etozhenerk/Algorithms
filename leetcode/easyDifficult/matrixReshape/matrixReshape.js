/**
 * @param {number[][]} mat
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
const matrixReshape = (mat, r, c) => {
  const arr = mat.flat();
  if (r * c != arr.length) {
    return mat;
  }

  const res = [];
  while (arr.length) {
    res.push(arr.splice(0, c));
  }
  return res;
};

console.log(
  matrixReshape(
    [
      [1, 2],
      [3, 4],
    ],
    2,
    4
  )
);
