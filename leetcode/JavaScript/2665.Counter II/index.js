/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function (init) {
  return {
    counter: init,
    increment: function () {
      return ++this.counter;
    },
    decrement: function () {
      return --this.counter;
    },
    reset: function () {
      this.counter = init;
      return this.counter;
    },
  };
};

const counter = createCounter(5);
console.log(counter.increment()); // 6
console.log(counter.reset()); // 5
console.log(counter.decrement()); // 4
