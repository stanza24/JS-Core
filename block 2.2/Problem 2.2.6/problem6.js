class Calc {
  constructor(value = 0) {
    this.value = value;
  }
  sub(value) {
    let num = this.value - value;
    return new Calc(num);
  }
  add(value) {
    let num = this.value + value;
    return new Calc(num);
  }
  result() {
    return this.value;
  }
}

export { Calc };
