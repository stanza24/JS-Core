class Addition {
  constructor(num) {
    this.num = num;
  }

  add(...nums) {
    const sum = (a, b) => a + b;
    return this.num + nums.reduce(sum);
  }
}
// Write you code here
Addition.prototype.logDecorator = function (fn) {
  return function () {
    let res = fn.call(this, ...arguments);
    console.log("called");
    return res;
  };
};

Addition.prototype.add = Addition.prototype.logDecorator(
  Addition.prototype.add
);

export { Addition };
