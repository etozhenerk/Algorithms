/**
 * @param {string} moves
 * @return {boolean}
 */
const judgeCircle = (moves) => {
  let x = 0;
  let y = 0;

  for (let i = 0; i < moves.length; i++) {
    const element = moves[i];

    if (element === "U") {
      y++;
    }
    if (element === "D") {
      y--;
    }
    if (element === "R") {
      x++;
    }
    if (element === "L") {
      x--;
    }
  }

  return x === 0 && y === 0;
};
