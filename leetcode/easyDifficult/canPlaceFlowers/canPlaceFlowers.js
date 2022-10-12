/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
const canPlaceFlowers = (flowerbed, n) => {
  for (let i = 0; i < flowerbed.length; i++) {
    if (
      flowerbed[i] !== 1 &&
      flowerbed[i - 1] !== 1 &&
      flowerbed[i + 1] !== 1
    ) {
      flowerbed[i] = 1;
      n--;
    }
  }

  return n === 0;
};

console.log(canPlaceFlowers([1, 0, 0, 0, 1], 2));
