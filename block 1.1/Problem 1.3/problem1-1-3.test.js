const compareWithPrecision = require("./problem1-1-3");

describe("defaultTo", () => {
  it("Должен корректно сравнивать положительные числа", () => {
    expect(compareWithPrecision(1000, 999, 1)).toBe(true);
    expect(compareWithPrecision(123, 125, 2)).toBe(true);
    expect(compareWithPrecision(1, 0.5, 0.1)).toBe(false);
    expect(compareWithPrecision(1, 0.699, 0.3)).toBe(false);
    expect(compareWithPrecision(1, 0, 0.5)).toBe(false);
  });

  it("Должен корректно сравнивать отрицательные числа", () => {
    expect(compareWithPrecision(-123, -125, 2)).toBe(true);
    expect(compareWithPrecision(1, -2, 0.1)).toBe(false);
    expect(compareWithPrecision(-1, -0.699, 0.3)).toBe(false);
    expect(compareWithPrecision(-1, -0, 0.5)).toBe(false);
  });
});
