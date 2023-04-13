/**
 * @param {number[]} widths
 * @param {string} s
 * @return {number[]}
 */
const numberOfLines = (widths, s) => {
  let line = 0;
  let currentWidth = 0;

  for (let i = 0; i < s.length; i++) {
    const letter = s[i];

    const width = widths[letter.charCodeAt(0) - 97];

    if (currentWidth + width <= 100) {
      currentWidth += width;
    } else {
      line++;
      currentWidth = width;
    }
  }

  if (currentWidth > 0) {
    line++;
  }

  return [line, currentWidth];
};
