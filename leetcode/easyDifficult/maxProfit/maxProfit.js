/**
 * @param {number[]} prices
 * @return {number}
 */
const maxProfit = (prices) => {
    let l = prices.length,
        max = 0,
        j = 1,
        sub = 0;
    for (let i = 0; i < l, j < l; j++) {
        sub = prices[j] - prices[i];

        if (sub > max) {
            max = sub;
        }
        if (sub < 0) {
            i = j;
        }
    }

    return max;
};

