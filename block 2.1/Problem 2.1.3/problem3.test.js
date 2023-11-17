import { sum } from "./problem3";

describe("sum", () => {
  test("должна использовать оператор rest", () => {
    const spy = jest.spyOn(Array.prototype, "reduce");
    sum(1, 2, 3);
    expect(spy).toHaveBeenCalled();
    spy.mockRestore();
  });

  test("должна суммировать правильно", () => {
    expect(sum(1, 2, 3, 4, 5)).toBe(15);
    expect(sum(-10, 15, 100)).toBe(105);
  });

  test("должна возвращать 0 при отсутствии аргументов", () => {
    expect(sum()).toBe(0);
  });

  test("должна игнорировать значения тех типов данных, которые не могут быть преобразованы к числу", () => {
    expect(sum(1, "a", {}, [], true, false, undefined, NaN)).toBe(2);
  });

  test("должна превращать значения в число, если это возможно", () => {
    expect(sum(1, "2", "3", true)).toBe(7);
  });
});
