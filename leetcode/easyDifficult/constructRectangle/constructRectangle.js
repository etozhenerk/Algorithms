/**
 * @param {number} area
 * @return {number[]}
 */
const constructRectangle = (area) => {
  let mid = Math.floor(Math.sqrt(area));

  while (mid !== 1) {
    if (area % mid === 0) {
      return [area / mid, mid];
    }
    mid--;
  }
  return [area, 1];
};
