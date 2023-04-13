/**
 * @param {Object} object
 * @param {Function} classFunction
 * @return {boolean}
 */
const checkIfInstanceOf = function (obj, classFunction) {
  while (obj != null) {
    if (obj.constructor === classFunction) {
      return true;
    }

    obj = Object.getPrototypeOf(obj);
  }

  return false;
};

class Animal {}
class Dog extends Animal {}

console.log(checkIfInstanceOf(5, Number));
