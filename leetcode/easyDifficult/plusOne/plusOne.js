/**
 * @param {number[]} digits
 * @return {number[]}
 */
const plusOne = (digits) => {
    let number = BigInt(digits.join(""));
    number++;
    return number.toString().split("");
};
