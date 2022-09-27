/**
 * @param {string[]} names
 * @param {number[]} heights
 * @return {string[]}
 */
const sortPeople = (names, heights) => {
    const people = [];
  
    for(let [index, name] of names.entries()) {
      people.push([name, heights[index]]);
    }
    return people.sort((a, b) => b[1] - a[1]).map(([name]) => name);
};
