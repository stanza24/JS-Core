import * as problem1 from "./problem1-3-1";

describe("sequence-sum edge cases", () => {
  it("правильно работает с отрицательными числами", () => {
    expect(problem1.sequenceSum(-2, -2)).toBe(-2);
    expect(problem1.sequenceSum(-5, -1)).toBe(-15); // -5 -4 -3 -2 -1 = -15
  });

  it("возвращает NaN, если начальное число больше конечного", () => {
    expect(problem1.sequenceSum(5, 1)).toBeNaN();
  });

  it("не вызывает саму себя, если begin равен end", () => {
    const mock = jest.spyOn(problem1, "sequenceSum");
    problem1.sequenceSum(10, 10);
    expect(mock).toHaveBeenCalledTimes(1);
    mock.mockRestore();
  });

  it("правильно работает с большими числами", () => {
    expect(problem1.sequenceSum(1000, 1000)).toBe(1000);
    expect(problem1.sequenceSum(1000, 1005)).toBe(6015);
  });

  it("обрабатывает некорректные типы данных", () => {
    expect(problem1.sequenceSum("1", "5")).toBeNaN();
    expect(problem1.sequenceSum(null, undefined)).toBeNaN();
    expect(problem1.sequenceSum({}, [])).toBeNaN();
  });
});
