/**
 * @param {string[]} list1
 * @param {string[]} list2
 * @return {string[]}
 */
const findRestaurant = (list1, list2) => {
  const map = new Map();
  let minSum = list1.length + list2.length;
  let ans = [];

  for (let i = 0; i < list1.length; i++) {
    const element = list1[i];
    map.set(element, i);
  }

  for (let i = 0; i < list2.length; i++) {
    const element = list2[i];
    if (map.has(element)) {
      const sum = map.get(element) + i;
      if (sum < minSum) {
        minSum = sum;
        ans = [element];
      } else if (sum === minSum) {
        ans.push(element);
      }
    }
  }

  return ans;
};
