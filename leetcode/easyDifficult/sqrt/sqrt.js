/**
 * @param {number} x
 * @return {number}
 */
const mySqrt = (x) => {
    let start = 1;
    let end = x;
    let cash;

    if (x === 0 || x === 1) {
        return x;
    }

    while (start < end) {
        let middle = Math.floor((start + end) / 2);
        if (middle * middle === x) {
            return middle;
        }
        if (middle * middle > x) {
            end = middle;
        } else {
            start = middle + 1;
            cash = middle;
        }
    }

    if (start === end) {
        return cash;
    }
};
