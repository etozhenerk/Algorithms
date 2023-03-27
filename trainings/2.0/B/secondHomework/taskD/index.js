const fs = require("fs");
let [lk, array] = fs.readFileSync("input.txt", "utf8").split("\n");
lk = lk.split(" ").map((i) => parseInt(i));
array = array.split(" ").map((i) => parseInt(i));

/**
 *
 * @param {number[]} lk L — длина лавочки и K — количество гранитных блоков-ножек. Оба числа натуральные и не превышают 10 000.
 * @param {number[]} array  K различных целых неотрицательных чисел, задающих положение каждой ножки. Положение ножки определяется расстоянием от левого края плиты до левого края ножки (ножка — это куб размером 1×1×1). Ножки перечислены слева направо (то есть начиная с ножки с меньшим расстоянием до левого края).
 * @returns {void} Требуется перечислить ножки, которые студентам нужно оставить. Для каждой ножки нужно выдать ее положение, как оно задано во входных данных. Ножки следует перечислять слева направо, в том порядке, в котором они встречаются во входных данных.
 */

const racket = (lk, array) => {
  const mid = Math.floor(lk[0] / 2);

  for (let i = 0; i < array.length; i++) {
    if (mid === array[i] && lk[0] % 2 === 1) {
      fs.writeFileSync("output.txt", mid.toString());
      break;
    } else if (array[i] >= mid) {
      fs.writeFileSync("output.txt", [array[i - 1], array[i]].join(" "));
      break;
    }
  }
};

racket(lk, array);
