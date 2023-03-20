const fs = require("fs");
let array = fs
  .readFileSync("input.txt", "utf8")
  .split(" ")
  .filter((item) => item !== "")
  .map((item) => parseInt(item));

/**
 *
 * @param {number[]} array Программа получает на вход десять чисел, разделенных пробелами. Каждое число задает тип здания на Новом проспекте: число 1 обозначает жилой дом, число 2 обозначает магазин, число 0 обозначает офисное здание. Гарантируется, что на Новом проспекте есть хотя бы один жилой дом и хотя бы один магазин.
 * @returns {void} Выведите одно целое число: наибольшее расстояние от дома до ближайшего к нему магазина. Расстояние между двумя соседними домами считается равным 1 (то есть если два дома стоят рядом, то между ними расстояние 1, если между двумя домами есть еще один дом, то расстояние между ними равно 2 и т.д.)
 */

const findMaxDistance = (array) => {
  let ans = 1;
  for (let i = 0; i < array.length; i++) {
    if (array[i] === 1) {
      let iDist = 11;
      for (let j = 0; j < array.length; j++) {
        if (array[j] === 2) {
          const dist = Math.abs(i - j);
          iDist = Math.min(dist, iDist);
        }
      }

      ans = Math.max(iDist, ans);
    }
  }

  fs.writeFileSync("output.txt", ans.toString());
};

/**
 *
 * @param {number[]} array Программа получает на вход десять чисел, разделенных пробелами. Каждое число задает тип здания на Новом проспекте: число 1 обозначает жилой дом, число 2 обозначает магазин, число 0 обозначает офисное здание. Гарантируется, что на Новом проспекте есть хотя бы один жилой дом и хотя бы один магазин.
 * @returns {void} Выведите одно целое число: наибольшее расстояние от дома до ближайшего к нему магазина. Расстояние между двумя соседними домами считается равным 1 (то есть если два дома стоят рядом, то между ними расстояние 1, если между двумя домами есть еще один дом, то расстояние между ними равно 2 и т.д.)
 */

const findMaxDistanceFast = (array) => {
  let ans = 0;
  let shopPos = -20;

  const left = new Array(array.length).fill(0);

  for (let i = 0; i < array.length; i++) {
    if (array[i] === 2) {
      shopPos = i;
    }

    if (array[i] === 1) {
      left[i] = i - shopPos;
    }
  }

  shopPos = 20;

  for (let i = array.length - 1; i >= 0; i--) {
    if (array[i] === 2) {
      shopPos = i;
    }

    if (array[i] === 1) {
      const minDist = Math.min(left[i], shopPos - i);
      ans = Math.max(minDist, ans);
    }
  }

  fs.writeFileSync("output.txt", ans.toString());
};

findMaxDistanceFast(array);
