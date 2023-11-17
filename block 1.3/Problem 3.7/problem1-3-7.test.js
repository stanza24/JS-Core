import { createObjectCalculator } from "./problem1-3-7";

describe("createObjectCalculator", () => {
  let calculator;

  beforeEach(() => {
    calculator = createObjectCalculator(2, 3);
  });

  it("должен возвращать объект calculator", () => {
    expect(typeof calculator).toBe("object");
    expect(calculator).toHaveProperty("read");
    expect(calculator).toHaveProperty("sum");
    expect(calculator).toHaveProperty("mul");
  });

  it("должен правильно суммировать начальные значения", () => {
    expect(calculator.sum()).toBe(5);
  });

  it("должен правильно умножать начальные значения", () => {
    expect(calculator.mul()).toBe(6);
  });

  it("должен сохранять новые значения с помощью метода read", () => {
    calculator.read(12, 34);
    expect(calculator.sum()).toBe(46);
    expect(calculator.mul()).toBe(408);
  });

  it("должен правильно суммировать после вызова read с другими значениями", () => {
    calculator.read(7, 8);
    expect(calculator.sum()).toBe(15);
  });

  it("должен правильно умножать после вызова read с другими значениями", () => {
    calculator.read(7, 8);
    expect(calculator.mul()).toBe(56);
  });
});
